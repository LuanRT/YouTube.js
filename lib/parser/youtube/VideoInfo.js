'use strict';

const { InnertubeError } = require('../../utils/Utils');
const { PassThrough, Readable } = BROWSER ? require('stream-browserify') : require('stream');

const Axios = require('axios');
const Parser = require('../contents');
const LiveChat = require('./LiveChat');
const Constants = require('../../utils/Constants');
const CancelToken = Axios.CancelToken;

/** Namespace */
class VideoInfo {
  #page;
  #actions;
  #player;
  #cpn;

  #watch_next_continuation;

  /**
   * @param {object} data - API response.
   * @param {import('../../core/Actions')} actions
   * @param {import('../../core/Player')} player
   * @param {string} cpn - Client Playback Nonce
   */
  constructor(data, actions, player, cpn) {
    this.#actions = actions;
    this.#player = player;
    this.#cpn = cpn;

    const info = Parser.parseResponse(data[0]);
    const next = Parser.parseResponse(data[1].data || {});

    this.#page = [ info, next ];

    if (info.playability_status.status === 'ERROR')
      throw new InnertubeError('This video is unavailable', info.playability_status);

    /**
     * @type {import('../contents/classes/VideoDetails')}
     */
    this.basic_info = {
      ...info.video_details,
      ...{
        /**
         * Microformat is a bit redundant, so only
         * a few things there are interesting to us.
         */
        embed: info.microformat.embed,
        channel: info.microformat.channel,
        is_unlisted: info.microformat.is_unlisted,
        is_family_safe: info.microformat.is_family_safe,
        has_ypc_metadata: info.microformat.has_ypc_metadata
      }
    };

    this.streaming_data = info.streaming_data || null;
    this.playability_status = info.playability_status;

    /**
     * @type {import('../contents/classes/PlayerAnnotationsExpanded')[]}
     */
    this.annotations = info.annotations;

    /**
     * @type {import('../contents/classes/PlayerStoryboardSpec')}
     */
    this.storyboards = info.storyboards;

    /**
     * @type {import('../contents/classes/Endscreen')}
     */
    this.endscreen = info.endscreen;

    /**
     * @type {import('../contents/classes/PlayerCaptionsTracklist')}
     */
    this.captions = info.captions;

    /**
     * @type {import('../contents/classes/CardCollection')}
     */
    this.cards = info.cards;

    const results = next.contents?.results;
    const secondary_results = next.contents?.secondary_results;

    if (results && secondary_results) {
      /**
       * @type {import('../contents/classes/VideoPrimaryInfo')}
       */
      this.primary_info = results.get({ type: 'VideoPrimaryInfo' });

      /**
       * @type {import('../contents/classes/VideoSecondaryInfo')}
       */
      this.secondary_info = results.get({ type: 'VideoSecondaryInfo' });

      /**
       * @type {import('../contents/classes/MerchandiseShelf')}
       */
      this.merchandise = results?.get({ type: 'MerchandiseShelf' }) || null;

      /**
       * @type {import('../contents/classes/ChipCloud')}
       */
      this.related_chip_cloud = secondary_results?.get({ type: 'RelatedChipCloud' })?.content;

      this.watch_next_feed = secondary_results?.get({ type: 'ItemSection' })?.contents;
      this.#watch_next_continuation = this.watch_next_feed?.pop();

      /**
       * @type {import('../contents/classes/PlayerOverlay')}
       */
      this.player_overlays = next.player_overlays;

      this.basic_info.like_count = this.primary_info.menu.top_level_buttons.get({ icon_type: 'LIKE' }).like_count;
      this.basic_info.is_liked = this.primary_info.menu.top_level_buttons.get({ icon_type: 'LIKE' }).is_toggled;
      this.basic_info.is_disliked = this.primary_info.menu.top_level_buttons.get({ icon_type: 'DISLIKE' }).is_toggled;

      const comments_entry_point = results.get({ target_id: 'comments-entry-point' });

      /**
       * @type {import('../contents/classes/CommentsEntryPointHeader')}
       */
      this.comments_entry_point_header = comments_entry_point?.contents.get({ type: 'CommentsEntryPointHeader' }) || null;

      /**
       * @type {import('../contents/classes/LiveChat')}
       */
      this.livechat = next.contents_memo.get('LiveChat')?.[0] || null;
    }
  }

  /**
   * Applies given filter to the watch next feed.
   *
   * @param {string} name
   * @returns {Promise.<VideoInfo>}
   */
  async selectFilter(name) {
    if (!this.filters.includes(name))
      throw new InnertubeError('Invalid filter', { available_filters: this.filters });

    const filter = this.related_chip_cloud.chips.get({ text: name });
    if (filter.is_selected) return this;

    const response = await filter.endpoint.call(this.#actions);
    const data = response.on_response_received_endpoints.get({ target_id: 'watch-next-feed' });

    this.watch_next_feed = data.contents;

    return this;
  }

  /** @typedef {import('../contents/classes/CompactVideo')} CompactVideo */
  /** @typedef {import('../contents/classes/CompactMix')} CompactMix */

  /**
   * Retrieves watch next feed continuation.
   *
   * @returns {Promise.<CompactVideo[] | CompactMix[]>}
   */
  async getWatchNextContinuation() {
    const response = await this.#watch_next_continuation.endpoint.call(this.#actions);
    const data = response.on_response_received_endpoints.get({ type: 'appendContinuationItemsAction' });

    this.watch_next_feed = data.contents;
    this.#watch_next_continuation = this.watch_next_feed.pop();

    return this.watch_next_feed;
  }

  /**
   * API response.
   *
   * @typedef {{ success: boolean, status_code: number, data: object }} Response
   */

  /**
   * Likes the video.
   *
   * @returns {Promise.<Response>}
   */
  async like() {
    const button = this.primary_info.menu.top_level_buttons.get({ button_id: 'TOGGLE_BUTTON_ID_TYPE_LIKE' });
    if (button.is_toggled) throw new InnertubeError('This video is already liked', { video_id: this.basic_info.id });

    const response = await button.endpoint.call(this.#actions);

    return response;
  }

  /**
   * Dislikes the video.
   *
   * @returns {Promise.<Response>}
   */
  async dislike() {
    const button = this.primary_info.menu.top_level_buttons.get({ button_id: 'TOGGLE_BUTTON_ID_TYPE_DISLIKE' });
    if (button.is_toggled) throw new InnertubeError('This video is already disliked', { video_id: this.basic_info.id });

    const response = await button.endpoint.call(this.#actions);

    return response;
  }

  /**
   * Removes like/dislike.
   *
   * @returns {Promise.<Response>}
   */
  async removeLike() {
    const button = this.primary_info.menu.top_level_buttons.get({ is_toggled: true });
    if (!button) throw new InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });

    const response = await button.toggled_endpoint.call(this.#actions);

    return response;
  }

  /**
   * Retrieves Live Chat if available.
   * @param {string} [mode] - livechat mode
   * @returns {Promise.<LiveChat>}
   */
  async getLiveChat(mode) {
    if (!this.livechat)
      throw new InnertubeError('Live Chat is not available', { video_id: this.id });

    return new LiveChat(this, mode);
  }

  /** @type {string[]} */
  get filters() {
    return this.related_chip_cloud?.chips.map((chip) => chip.text.toString()) || [];
  }

  get actions() {
    return this.#actions;
  }

  get page() {
    return this.#page;
  }

  /**
   * Get songs used in the video.
   */
  get music_tracks() {
    /**
     * @type {import('../parser/contents/MetadataRowContainer')}
     */
    const metadata = this.secondary_info.metadata;
    if (!metadata) return [];

    const songs = [];

    let current_song = {};
    let is_music_section = false;

    for (let i = 0; i < metadata.rows.length; i++) {
      const row = metadata.rows[i];

      if (row.type === 'MetadataRowHeader') {
        if (row.content.toString().toLowerCase().startsWith('music')) {
          is_music_section = true;
          i++; // Skip the learn more link
        }
        continue;
      }

      if (!is_music_section) continue;

      current_song[row.title.toString().toLowerCase().replace(/ /g, '_')] = row.contents;

      if (row.has_divider_line) {
        songs.push(current_song);
        current_song = {};
      }
    }

    if (is_music_section) songs.push(current_song);

    return songs;
  }

  chooseFormat(options) {
    const formats = [
      ...(this.streaming_data.formats || []),
      ...(this.streaming_data.adaptive_formats || [])
    ];

    const requires_audio = options.type.includes('audio');
    const requires_video = options.type.includes('video');

    let best_width = -1;

    const is_best = [ 'best', 'bestefficiency' ].includes(options.quality);

    const use_most_efficient = options.quality !== 'best';

    let candidates = formats.filter((format) => {
      if (requires_audio && !format.has_audio)
        return false;
      if (requires_video && !format.has_video)
        return false;
      if (options.format !== 'any' && !format.mime_type.includes(options.format))
        return false;
      if (!is_best && format.quality_label !== options.quality)
        return false;
      if (best_width < format.width)
        best_width = format.width;
      return true;
    });

    if (candidates.length === 0) {
      throw new InnertubeError('No matching formats found', {
        options
      });
    }

    if (is_best && requires_video)
      candidates = candidates.filter((format) => format.width === best_width);

    if (requires_audio && !requires_video) {
      const audio_only = candidates.filter((format) => !format.has_video);
      if (audio_only.length > 0) {
        candidates = audio_only;
      }
    }

    if (use_most_efficient) {
      // Sort by bitrate (lower is better)
      candidates.sort((a, b) => a.bitrate - b.bitrate);
    } else {
      // Sort by bitrate (higher is better)
      candidates.sort((a, b) => b.bitrate - a.bitrate);
    }

    return candidates[0];
  }

  /**
   *
   * @param {object} options - download options.
   * @param {string} [options.quality] - video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.
   * @param {string} [options.type] - download type, can be: video, audio or videoandaudio
   * @param {string} [options.format] - file format, use 'any' to download any format.
   * @param {object} [options.range] - download range, indicates which bytes should be downloaded.
   * @param {number} options.range.start - the beginning of the range.
   * @param {number} options.range.end - the end of the range.
   * @param {import('stream').PassThrough} [_stream]
   * @returns {import('stream').PassThrough}
   */
  download(options = {}, _stream) {
    /** @type {import('stream').PassThrough} */
    const stream = _stream ? _stream : new PassThrough();

    let cancel;
    let cancelled = false;

    (async () => {
      if (this.playability_status === 'UNPLAYABLE')
        return stream.emit('error', new InnertubeError('Video is unplayable', { video: this, error_type: 'UNPLAYABLE' }));
      if (this.playability_status === 'LOGIN_REQUIRED')
        return stream.emit('error', new InnertubeError('Video is login required', { video: this, error_type: 'LOGIN_REQUIRED' }));
      if (!this.streaming_data)
        return stream.emit('error', new InnertubeError('Streaming data not available.', { video: this, error_type: 'NO_STREAMING_DATA' }));

      const opts = {
        quality: '360p',
        type: 'videoandaudio',
        format: 'mp4',
        range: undefined,
        ...options
      };

      const format = this.chooseFormat(opts);

      const format_url = format.decipher(this.#player);

      if (opts.type === 'videoandaudio' && !options.range) {
        const response = await Axios.get(`${format_url}&cpn=${this.#cpn}`, {
          responseType: 'stream',
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
          headers: Constants.STREAM_HEADERS
        }).catch((error) => error);

        if (response instanceof Error) {
          stream.emit('error', new InnertubeError(response.message, { type: 'REQUEST_FAILED' }));
          return stream;
        }
        stream.emit('start');


        let downloaded_size = 0;

        if (typeof response.data === 'object') {
          response.data.on('data', (chunk) => {
            downloaded_size += chunk.length;

            // Note: format.content_length is NOT always available so we need to use what we get from the headers.
            const size = (response.headers['content-length'] / 1024 / 1024).toFixed(2);
            const percentage = Math.floor((downloaded_size / response.headers['content-length']) * 100);

            stream.emit('progress', {
              size,
              percentage,
              chunk_size: chunk.length,
              downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2),
              raw_data: {
                chunk_size: chunk.length,
                downloaded: downloaded_size,
                size: response.headers['content-length']
              }
            });
          });

          response.data.on('error', (err) => {
            cancelled &&
              stream.emit('error', new InnertubeError('The download was cancelled.', { type: 'DOWNLOAD_CANCELLED' })) ||
              stream.emit('error', new InnertubeError(err.message, { type: 'DOWNLOAD_ABORTED' }));
          });

          response.data.pipe(stream, { end: true });
        } else {
          // If the response is not an object, it's probably a string, because of the XmlHttpRequest backend
          // Which means we are running in browser and we can't pipe the response directly
          // So we need to create a readable stream and pipe it to the stream
          const readable = new Readable();
          readable.push(response.data);
          readable.pipe(stream, { end: true });
        }
      } else {
        const chunk_size = 1048576 * 10; // 10MB

        let chunk_start = (options.range ? options.range.start : 0);
        let chunk_end = (options.range ? options.range.end : chunk_size);
        let downloaded_size = 0;
        let must_end = false;

        stream.emit('start');

        const downloadChunk = async () => {
          if (chunk_end >= format.content_length || options.range) {
            must_end = true;
          }
          if (options.range) {
            format.content_length = options.range.end;
          }

          const response = await Axios.get(`${format_url}&cpn=${this.#cpn}&range=${chunk_start}-${chunk_end || ''}`, {
            responseType: 'stream',
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
            headers: Constants.STREAM_HEADERS
          }).catch((error) => error);

          if (response instanceof Error) {
            stream.emit('error', { message: response.message, type: 'REQUEST_FAILED' });
            return stream;
          }

          if (typeof response.data === 'object') {
            response.data.on('data', (chunk) => {
              downloaded_size += chunk.length;

              // Note: format.content_length is NOT always available so we need to use what we get from the headers.
              const size = (response.headers['content-length'] / 1024 / 1024).toFixed(2);
              const percentage = Math.floor((downloaded_size / response.headers['content-length']) * 100);

              stream.emit('progress', {
                size,
                percentage,
                chunk_size: chunk.length,
                downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2),
                raw_data: {
                  chunk_size: chunk.length,
                  downloaded: downloaded_size,
                  size: response.headers['content-length']
                }
              });
            });

            response.data.on('error', (err) => {
              cancelled &&
                stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' }) ||
                stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
            });

            response.data.on('end', () => {
              if (!must_end && !options.range) {
                chunk_start = chunk_end + 1;
                chunk_end += chunk_size;
                downloadChunk();
              }
            });

            response.data.pipe(stream, { end: must_end });
          } else {
            // If the response is not an object, it's probably a string, because of the XmlHttpRequest backend
            // Which means we are running in browser and we can't pipe the response directly
            // So we need to create a readable stream and pipe it to the stream
            const readable = new Readable();
            readable.push(response.data);
            readable.pipe(stream, { end: must_end });
          }
        };

        downloadChunk();
      }

    })().catch((err) => {
      stream.emit('error', err);
    });

    stream.cancel = () => {
      cancelled = true;
      cancel && cancel();
    };

    return stream;
  }
}

module.exports = VideoInfo;