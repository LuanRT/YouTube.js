import Constants from '../../utils/Constants';
import Parser, { ParsedResponse } from '../index';

import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo';

import MerchandiseShelf from '../classes/MerchandiseShelf';
import RelatedChipCloud from '../classes/RelatedChipCloud';

import ChipCloud from '../classes/ChipCloud';
import ChipCloudChip from '../classes/ChipCloudChip';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader';
import ContinuationItem from '../classes/ContinuationItem';
import ItemSection from '../classes/ItemSection';
import LiveChat from '../classes/LiveChat';
import MicroformatData from '../classes/MicroformatData';
import PlayerMicroformat from '../classes/PlayerMicroformat';
import PlayerOverlay from '../classes/PlayerOverlay';
import SegmentedLikeDislikeButton from '../classes/SegmentedLikeDislikeButton';
import ToggleButton from '../classes/ToggleButton';
import LiveChatWrap from './LiveChat';

import type CardCollection from '../classes/CardCollection';
import type Endscreen from '../classes/Endscreen';
import type Format from '../classes/misc/Format';
import type PlayerAnnotationsExpanded from '../classes/PlayerAnnotationsExpanded';
import type PlayerCaptionsTracklist from '../classes/PlayerCaptionsTracklist';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec';

import { DOMParser } from 'linkedom';
import type { Element } from 'linkedom/types/interface/element';
import type { Node } from 'linkedom/types/interface/node';
import type { XMLDocument } from 'linkedom/types/xml/document';

import type Player from '../../core/Player';
import type Actions from '../../core/Actions';
import type { ApiResponse } from '../../core/Actions';
import type { ObservedArray, YTNode } from '../helpers';

import { getStringBetweenStrings, InnertubeError, streamToIterable } from '../../utils/Utils';

export type URLTransformer = (url: URL) => URL;

export interface FormatOptions {
  /**
   * Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.
   */
  quality?: string;
  /**
   * Download type, can be: video, audio or video+audio
   */
  type?: 'video' | 'audio' | 'video+audio';
  /**
   * File format, use 'any' to download any format
   */
  format?: string;
  /**
   * InnerTube client, can be ANDROID, WEB, YTMUSIC, YTMUSIC_ANDROID, YTSTUDIO_ANDROID or TV_EMBEDDED
   */
  client?: 'WEB' | 'ANDROID' | 'YTMUSIC_ANDROID' | 'YTMUSIC' | 'YTSTUDIO_ANDROID' | 'TV_EMBEDDED';
}

export interface DownloadOptions extends FormatOptions {
  /**
   * Download range, indicates which bytes should be downloaded.
   */
  range?: {
    start: number;
    end: number;
  }
}

class VideoInfo {
  #page: [ParsedResponse, ParsedResponse?];

  #actions: Actions;
  #player?: Player;
  #cpn?: string;
  #watch_next_continuation?: ContinuationItem;

  basic_info;
  streaming_data;
  playability_status;
  annotations: ObservedArray<PlayerAnnotationsExpanded>;
  storyboards: PlayerStoryboardSpec | PlayerLiveStoryboardSpec | null;
  endscreen: Endscreen | null;
  captions: PlayerCaptionsTracklist | null;
  cards: CardCollection | null;

  #playback_tracking;

  primary_info?: VideoPrimaryInfo | null;
  secondary_info?: VideoSecondaryInfo | null;
  merchandise?: MerchandiseShelf | null;
  related_chip_cloud?: ChipCloud | null;
  watch_next_feed?: ObservedArray<YTNode> | null;
  player_overlays?: PlayerOverlay | null;
  comments_entry_point_header?: CommentsEntryPointHeader | null;
  livechat?: LiveChat | null;

  /**
   * @param data - API response.
   * @param actions - Actions instance.
   * @param player - Player instance.
   * @param cpn - Client Playback Nonce.
   */
  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, player?: Player, cpn?: string) {
    this.#actions = actions;
    this.#player = player;
    this.#cpn = cpn;

    const info = Parser.parseResponse(data[0].data);
    const next = data?.[1]?.data ? Parser.parseResponse(data[1].data) : undefined;

    this.#page = [ info, next ];

    if (info.playability_status?.status === 'ERROR')
      throw new InnertubeError('This video is unavailable', info.playability_status);

    if (info.microformat && !info.microformat?.is(PlayerMicroformat, MicroformatData))
      throw new InnertubeError('Invalid microformat', info.microformat);

    this.basic_info = { // This type is inferred so no need for an explicit type
      ...info.video_details,
      ...{
        /**
         * Microformat is a bit redundant, so only
         * a few things there are interesting to us.
         */
        embed: info.microformat?.is(PlayerMicroformat) ? info.microformat?.embed : null,
        channel: info.microformat?.is(PlayerMicroformat) ? info.microformat?.channel : null,
        is_unlisted: info.microformat?.is_unlisted,
        is_family_safe: info.microformat?.is_family_safe,
        has_ypc_metadata: info.microformat?.is(PlayerMicroformat) ? info.microformat?.has_ypc_metadata : null
      },
      like_count: undefined as number | undefined,
      is_liked: undefined as boolean | undefined,
      is_disliked: undefined as boolean | undefined
    };

    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    this.annotations = info.annotations;
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;
    this.captions = info.captions;
    this.cards = info.cards;

    this.#playback_tracking = info.playback_tracking;

    const two_col = next?.contents.item().as(TwoColumnWatchNextResults);

    const results = two_col?.results;
    const secondary_results = two_col?.secondary_results;

    if (results && secondary_results) {
      this.primary_info = results.firstOfType(VideoPrimaryInfo);
      this.secondary_info = results.firstOfType(VideoSecondaryInfo);
      this.merchandise = results.firstOfType(MerchandiseShelf);
      this.related_chip_cloud = secondary_results.firstOfType(RelatedChipCloud)?.content.item().as(ChipCloud);

      this.watch_next_feed = secondary_results.firstOfType(ItemSection)?.contents;

      if (this.watch_next_feed && Array.isArray(this.watch_next_feed))
        this.#watch_next_continuation = this.watch_next_feed.pop()?.as(ContinuationItem);

      this.player_overlays = next?.player_overlays.item().as(PlayerOverlay);

      const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);

      this.basic_info.like_count = segmented_like_dislike_button?.like_button?.as(ToggleButton)?.like_count;
      this.basic_info.is_liked = segmented_like_dislike_button?.like_button?.as(ToggleButton)?.is_toggled;
      this.basic_info.is_disliked = segmented_like_dislike_button?.dislike_button?.as(ToggleButton)?.is_toggled;

      const comments_entry_point = results.get({ target_id: 'comments-entry-point' })?.as(ItemSection);

      this.comments_entry_point_header = comments_entry_point?.contents?.firstOfType(CommentsEntryPointHeader);
      this.livechat = next?.contents_memo.getType(LiveChat)?.[0];
    }
  }

  /**
   * Applies given filter to the watch next feed. Use {@link filters} to get available filters.
   * @param target_filter - Filter to apply.
   */
  async selectFilter(target_filter: string | ChipCloudChip | undefined): Promise<VideoInfo> {
    let cloud_chip: ChipCloudChip;

    if (typeof target_filter === 'string') {
      const filter = this.related_chip_cloud?.chips?.get({ text: target_filter });

      if (!filter)
        throw new InnertubeError('Invalid filter', { available_filters: this.filters });

      cloud_chip = filter;
    } else if (target_filter?.is(ChipCloudChip)) {
      cloud_chip = target_filter;
    } else {
      throw new InnertubeError('Invalid cloud chip', target_filter);
    }

    if (cloud_chip.is_selected) return this;

    const response = await cloud_chip.endpoint?.call(this.#actions, { parse: true });
    const data = response?.on_response_received_endpoints?.get({ target_id: 'watch-next-feed' });

    this.watch_next_feed = data?.contents;

    return this;
  }

  /**
   * Adds video to the watch history.
   */
  async addToWatchHistory(): Promise<Response> {
    if (!this.#playback_tracking)
      throw new InnertubeError('Playback tracking not available');

    const url_params = {
      cpn: this.#cpn,
      fmt: 251,
      rtn: 0,
      rt: 0
    };

    const url = this.#playback_tracking.videostats_playback_url.replace('https://s.', 'https://www.');

    const response = await this.#actions.stats(url, {
      client_name: Constants.CLIENTS.WEB.NAME,
      client_version: Constants.CLIENTS.WEB.VERSION
    }, url_params);

    return response;
  }

  /**
   * Retrieves watch next feed continuation.
   */
  async getWatchNextContinuation(): Promise<VideoInfo> {
    const response = await this.#watch_next_continuation?.endpoint.call(this.#actions, { parse: true });
    const data = response?.on_response_received_endpoints?.get({ type: 'appendContinuationItemsAction' });

    if (!data)
      throw new InnertubeError('Continuation not found');

    this.watch_next_feed = data?.contents;
    this.#watch_next_continuation = this.watch_next_feed?.pop()?.as(ContinuationItem);

    return this;
  }

  /**
   * Likes the video.
   */
  async like(): Promise<ApiResponse> {
    const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
    const button = segmented_like_dislike_button?.like_button?.as(ToggleButton);

    if (!button)
      throw new InnertubeError('Like button not found', { video_id: this.basic_info.id });

    if (button.is_toggled)
      throw new InnertubeError('This video is already liked', { video_id: this.basic_info.id });

    const response = await button.endpoint.call(this.#actions);

    return response;
  }

  /**
   * Dislikes the video.
   */
  async dislike(): Promise<ApiResponse> {
    const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
    const button = segmented_like_dislike_button?.dislike_button?.as(ToggleButton);

    if (!button)
      throw new InnertubeError('Dislike button not found', { video_id: this.basic_info.id });

    if (button.is_toggled)
      throw new InnertubeError('This video is already disliked', { video_id: this.basic_info.id });

    const response = await button.endpoint.call(this.#actions);

    return response;
  }

  /**
   * Removes like/dislike.
   */
  async removeRating(): Promise<ApiResponse> {
    let button;

    const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
    const like_button = segmented_like_dislike_button?.like_button?.as(ToggleButton);
    const dislike_button = segmented_like_dislike_button?.dislike_button?.as(ToggleButton);

    if (like_button?.is_toggled) {
      button = like_button;
    } else if (dislike_button?.is_toggled) {
      button = dislike_button;
    }

    if (!button)
      throw new InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });

    const response = await button.toggled_endpoint.call(this.#actions);

    return response;
  }

  /**
   * Retrieves Live Chat if available.
   */
  getLiveChat(): LiveChatWrap {
    if (!this.livechat)
      throw new InnertubeError('Live Chat is not available', { video_id: this.basic_info.id });
    return new LiveChatWrap(this);
  }

  /**
   * Watch next feed filters.
   */
  get filters(): string[] {
    return this.related_chip_cloud?.chips?.map((chip) => chip.text.toString()) || [];
  }

  /**
   * Actions instance.
   */
  get actions(): Actions {
    return this.#actions;
  }

  /**
   * Content Playback Nonce.
   */
  get cpn(): string | undefined {
    return this.#cpn;
  }

  /**
   * Original parsed InnerTube response.
   */
  get page(): [ ParsedResponse, ParsedResponse? ] {
    return this.#page;
  }

  /**
   * Get songs used in the video.
   */
  // TODO: this seems to be broken with the new UI, further investigation needed
  get music_tracks() {
    /*
        Const metadata = this.secondary_info?.metadata;
        if (!metadata)
            return [];
        const songs = [];
        let current_song: Record<string, Text[]> = {};
        let is_music_section = false;
        for (let i = 0; i < metadata.rows.length; i++) {
            const row = metadata.rows[i];
            if (row.is(MetadataRowHeader)) {
                if (row.content.toString().toLowerCase().startsWith('music')) {
                    is_music_section = true;
                    i++; // Skip the learn more link
                }
                continue;
            }
            if (!is_music_section)
                continue;
            if (row.is(MetadataRow))
                current_song[row.title.toString().toLowerCase().replace(/ /g, '_')] = row.contents;
            // TODO: this makes no sense, we continue above when
            if (row.has_divider_line) {
                songs.push(current_song);
                current_song = {};
            }

        }
        if (is_music_section)
            songs.push(current_song);
        return songs;
        */
    return [];
  }

  /**
   * Selects the format that best matches the given options.
   * @param options - Options
   */
  chooseFormat(options: FormatOptions): Format {
    if (!this.streaming_data)
      throw new InnertubeError('Streaming data not available', { video_id: this.basic_info.id });

    const formats = [
      ...(this.streaming_data.formats || []),
      ...(this.streaming_data.adaptive_formats || [])
    ];

    const requires_audio = options.type ? options.type.includes('audio') : true;
    const requires_video = options.type ? options.type.includes('video') : true;
    const quality = options.quality || '360p';

    let best_width = -1;

    const is_best = [ 'best', 'bestefficiency' ].includes(quality);
    const use_most_efficient = quality !== 'best';

    let candidates = formats.filter((format) => {
      if (requires_audio && !format.has_audio)
        return false;
      if (requires_video && !format.has_video)
        return false;
      if (options.format !== 'any' && !format.mime_type.includes(options.format || 'mp4'))
        return false;
      if (!is_best && format.quality_label !== quality)
        return false;
      if (best_width < format.width)
        best_width = format.width;
      return true;
    });

    if (!candidates.length) {
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

  #el(document: XMLDocument, tag: string, attrs: Record<string, string | undefined>, children: Node[] = []) {
    const el = document.createElement(tag);
    for (const [ key, value ] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
    for (const child of children) {
      if (typeof child === 'undefined') continue;
      el.appendChild(child);
    }
    return el;
  }

  /**
   * Generates a DASH manifest from the streaming data.
   * @param url_transformer - Function to transform the URLs.
   * @returns DASH manifest
   */
  toDash(url_transformer: URLTransformer = (url) => url): string {
    if (!this.streaming_data)
      throw new InnertubeError('Streaming data not available', { video_id: this.basic_info.id });

    const { adaptive_formats } = this.streaming_data;

    const length = adaptive_formats[0].approx_duration_ms / 1000;

    const document = new DOMParser().parseFromString('', 'text/xml');
    const period = document.createElement('Period');

    document.appendChild(this.#el(document, 'MPD', {
      xmlns: 'urn:mpeg:dash:schema:mpd:2011',
      minBufferTime: 'PT1.500S',
      profiles: 'urn:mpeg:dash:profile:isoff-main:2011',
      type: 'static',
      mediaPresentationDuration: `PT${length}S`,
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:schemaLocation': 'urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd'
    }, [
      period
    ]));

    this.#generateAdaptationSet(document, period, adaptive_formats, url_transformer);

    return `${document}`;
  }

  #generateAdaptationSet(document: XMLDocument, period: Element, formats: Format[], url_transformer: URLTransformer) {
    const mimeTypes: string[] = [];
    const mimeObjects: Format[][] = [ [] ];

    formats.forEach((videoFormat) => {
      if (!videoFormat.index_range || !videoFormat.init_range) {
        return;
      }
      const mimeType = videoFormat.mime_type;
      const mimeTypeIndex = mimeTypes.indexOf(mimeType);
      if (mimeTypeIndex > -1) {
        mimeObjects[mimeTypeIndex].push(videoFormat);
      } else {
        mimeTypes.push(mimeType);
        mimeObjects.push([]);
        mimeObjects[mimeTypes.length - 1].push(videoFormat);
      }
    });

    for (let i = 0; i < mimeTypes.length; i++) {
      const set = this.#el(document, 'AdaptationSet', {
        id: `${i}`,
        mimeType: mimeTypes[i].split(';')[0],
        startWithSAP: '1',
        subsegmentAlignment: 'true'
      });
      period.appendChild(set);
      mimeObjects[i].forEach((format) => {
        if (format.has_video) {
          this.#generateRepresentationVideo(document, set, format, url_transformer);
        } else {
          this.#generateRepresentationAudio(document, set, format, url_transformer);
        }
      });
    }
  }

  #generateRepresentationVideo(document: XMLDocument, set: Element, format: Format, url_transformer: URLTransformer) {
    const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');

    if (!format.index_range || !format.init_range)
      throw new InnertubeError('Index and init ranges not available', { format });

    const url = new URL(format.decipher(this.#player));
    url.searchParams.set('cpn', this.#cpn || '');

    set.appendChild(this.#el(document, 'Representation', {
      id: format.itag,
      codecs,
      bandwidth: format.bitrate,
      width: format.width,
      height: format.height,
      maxPlayoutRate: '1',
      frameRate: format.fps
    }, [
      this.#el(document, 'BaseURL', {}, [
        document.createTextNode(url_transformer(url).toString())
      ]),
      this.#el(document, 'SegmentBase', {
        indexRange: `${format.index_range.start}-${format.index_range.end}`
      }, [
        this.#el(document, 'Initialization', {
          range: `${format.init_range.start}-${format.init_range.end}`
        })
      ])
    ]));
  }

  #generateRepresentationAudio(document: XMLDocument, set: Element, format: Format, url_transformer: URLTransformer) {
    const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
    if (!format.index_range || !format.init_range)
      throw new InnertubeError('Index and init ranges not available', { format });

    const url = new URL(format.decipher(this.#player));
    url.searchParams.set('cpn', this.#cpn || '');

    set.appendChild(this.#el(document, 'Representation', {
      id: format.itag,
      codecs,
      bandwidth: format.bitrate
    }, [
      this.#el(document, 'AudioChannelConfiguration', {
        schemeIdUri: 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011',
        value: format.audio_channels || '2'
      }),
      this.#el(document, 'BaseURL', {}, [
        document.createTextNode(url_transformer(url).toString())
      ]),
      this.#el(document, 'SegmentBase', {
        indexRange: `${format.index_range.start}-${format.index_range.end}`
      }, [
        this.#el(document, 'Initialization', {
          range: `${format.init_range.start}-${format.init_range.end}`
        })
      ])
    ]));
  }

  /**
   * Downloads the video.
   * @param options - Download options.
   */
  async download(options: DownloadOptions = {}): Promise<ReadableStream<Uint8Array>> {
    if (this.playability_status?.status === 'UNPLAYABLE')
      throw new InnertubeError('Video is unplayable', { video: this, error_type: 'UNPLAYABLE' });
    if (this.playability_status?.status === 'LOGIN_REQUIRED')
      throw new InnertubeError('Video is login required', { video: this, error_type: 'LOGIN_REQUIRED' });
    if (!this.streaming_data)
      throw new InnertubeError('Streaming data not available.', { video: this, error_type: 'NO_STREAMING_DATA' });

    const opts: DownloadOptions = {
      quality: '360p',
      type: 'video+audio',
      format: 'mp4',
      range: undefined,
      ...options
    };

    const format = this.chooseFormat(opts);
    const format_url = format.decipher(this.#player);

    // If we're not downloading the video in chunks, we just use fetch once.
    if (opts.type === 'video+audio' && !options.range) {
      const response = await this.#actions.session.http.fetch_function(`${format_url}&cpn=${this.#cpn}`, {
        method: 'GET',
        headers: Constants.STREAM_HEADERS,
        redirect: 'follow'
      });

      // Throw if the response is not 2xx
      if (!response.ok)
        throw new InnertubeError('The server responded with a non 2xx status code', { video: this, error_type: 'FETCH_FAILED', response });

      const body = response.body;

      if (!body)
        throw new InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });

      return body;
    }

    // We need to download in chunks.

    const chunk_size = 1048576 * 10; // 10MB

    let chunk_start = (options.range ? options.range.start : 0);
    let chunk_end = (options.range ? options.range.end : chunk_size);
    let must_end = false;

    let cancel: AbortController;

    const readable_stream = new ReadableStream<Uint8Array>({
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      start() { },
      pull: async (controller) => {
        if (must_end) {
          controller.close();
          return;
        }

        if ((chunk_end >= format.content_length) || options.range) {
          must_end = true;
        }

        return new Promise(async (resolve, reject) => {
          try {
            cancel = new AbortController();

            const response = await this.#actions.session.http.fetch_function(`${format_url}&cpn=${this.#cpn}&range=${chunk_start}-${chunk_end || ''}`, {
              method: 'GET',
              headers: {
                ...Constants.STREAM_HEADERS
                // XXX: use YouTube's range parameter instead of a Range header.
                // Range: `bytes=${chunk_start}-${chunk_end}`
              },
              signal: cancel.signal
            });

            const body = response.body;

            if (!body)
              throw new InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });

            for await (const chunk of streamToIterable(body)) {
              controller.enqueue(chunk);
            }

            chunk_start = chunk_end + 1;
            chunk_end += chunk_size;

            resolve();
            return;
          } catch (e: any) {
            reject(e);
          }
        });
      },
      async cancel(reason) {
        cancel.abort(reason);
      }
    }, {
      highWaterMark: 1, // TODO: better value?
      size(chunk) {
        return chunk.byteLength;
      }
    });

    return readable_stream;
  }
}

export default VideoInfo;