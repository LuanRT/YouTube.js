'use strict';

const Parser = require('../contents');
const { InnertubeError } = require('../../utils/Utils');

/** namespace **/
class VideoInfo {
  #page;
  #actions;
  #player;
  
  #watch_next_continuation;
  
  /**
   * @param {object} data - API response.
   * @param {import('../../core/Actions')} actions
   * @param {import('../../core/Player')} player
   * @constructor
   */
  constructor(data, actions, player) {
    this.#actions = actions;
    this.#player = player;
    
    const info = Parser.parseResponse(data[0]);
    const next = Parser.parseResponse(data[1].data);
    
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
    
    const results = next.contents.results;
    const secondary_results = next.contents.secondary_results;
    
    /**
     * @type {import('../contents/classes/VideoPrimaryInfo')}
     */
    this.primary_info = results.get({ type: 'videoPrimaryInfoRenderer' });
    
    /**
     * @type {import('../contents/classes/VideoSecondaryInfo')}
     */
    this.secondary_info = results.get({ type: 'videoSecondaryInfoRenderer' });
    
    /**
     * @type {import('../contents/classes/MerchandiseShelf')}
     */
    this.merchandise = results?.get({ type: 'merchandiseShelfRenderer' });
    
    /**
     * @type {import('../contents/classes/ChipCloud')}
     */
    this.related_chip_cloud = secondary_results?.get({ type: 'relatedChipCloudRenderer' }).content;
    
    this.watch_next_feed = secondary_results?.get({ target_id: 'watch-next-feed' }).contents;
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
    this.comments_entry_point_header = comments_entry_point?.contents.get({ type: 'commentsEntryPointHeaderRenderer' }) || {};
  }
  
  /**
   * Applies given filter to the watch next feed.
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
  
  /**
   * Retrieves watch next feed continuation.
   * @returns {Promise.<CompactVideo[]>}
   */
  async getWatchNextContinuation() {
    const response = await this.#watch_next_continuation.endpoint.call(this.#actions);
    const data = response.on_response_received_endpoints.get({ type: 'appendContinuationItemsAction' });
  
    this.watch_next_feed = data.continuation_items;
    this.#watch_next_continuation = this.watch_next_feed.pop();
    
    return this.watch_next_feed;
  }
  
  /** @type {string} */
  get filters() {
    return this.related_chip_cloud.chips.map((chip) => chip.text);
  }
  
  get page() {
    return this.#page;
  }
}

module.exports = VideoInfo;