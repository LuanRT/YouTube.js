'use strict';

const Parser = require('../contents');
const { InnertubeError } = require('../../utils/Utils');

/** namespace */
class VideoInfo {
  #page;
  #actions;
  #player;

  #watch_next_continuation;

  /**
   * @param {object} data - API response.
   * @param {import('../../core/Actions')} actions
   * @param {import('../../core/Player')} player
   */
  constructor(data, actions, player) {
    this.#actions = actions;
    this.#player = player;

    const info = Parser.parseResponse(data[0]);
    const next = Parser.parseResponse(data[1].data);

    this.#page = [info, next];

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

    const results = next.contents.results;
    const secondary_results = next.contents.secondary_results;

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

    this.watch_next_feed = secondary_results?.get({ target_id: 'watch-next-feed' })?.contents;
    this.#watch_next_continuation = this.watch_next_feed?.pop();

    /**
     * @type {import('../contents/classes/PlayerOverlay')}
     */
    this.player_overlays = next.player_overlays;

    this.basic_info.like_count = this.primary_info.menu.top_level_buttons.get({ icon_type: 'LIKE' }).like_count;
    this.basic_info.is_liked = this.primary_info.menu.top_level_buttons.get({ icon_type: 'LIKE' }).is_toggled;
    this.basic_info.is_disliked = this.primary_info.menu.top_level_buttons.get({ icon_type: 'DISLIKE' }).is_toggled;

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

    const comments_entry_point = results.get({ target_id: 'comments-entry-point' });

    /**
     * @type {import('../contents/classes/CommentsEntryPointHeader')}
     */
    this.comments_entry_point_header = comments_entry_point?.contents.get({ type: 'CommentsEntryPointHeader' }) || {};
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

    this.watch_next_feed = data.continuation_items;

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

    this.watch_next_feed = data.continuation_items;
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

  /** @type {string[]} */
  get filters() {
    return this.related_chip_cloud?.chips.map((chip) => chip.text.toString()) || [];
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
          i++; // skip the learn more link
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
}

module.exports = VideoInfo;