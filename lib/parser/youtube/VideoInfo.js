'use strict';

const Parser = require('../contents');
const { InnertubeError } = require('../../utils/Utils');

/** namespace **/
class VideoInfo {
  #page;
  #actions;
  #player;
  
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
    
    /**
     * @type {import('../contents/classes/VideoPrimaryInfo')}
     */
    this.primary_info = next.contents.results.get({ type: 'videoPrimaryInfoRenderer' });
    
    /**
     * @type {import('../contents/classes/VideoSecondaryInfo')}
     */
    this.secondary_info = next.contents.results.get({ type: 'videoSecondaryInfoRenderer' });
    
    /**
     * @type {import('../contents/classes/MerchandiseShelf')}
     */
    this.merchandise = next.contents.results?.get({ type: 'merchandiseShelfRenderer' });
    
    /**
     * @type {import('../contents/classes/ChipCloud')}
     */
    this.related_chip_cloud = next.contents.secondary_results?.get({ type: 'relatedChipCloudRenderer' }).content;
    
    this.watch_next_feed = next.contents.secondary_results?.get({ target_id: 'watch-next-feed' }).contents;
    this.watch_next_feed?.pop(); // get rid of the continuation item as it is of no use (for now).
    
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
    
    const comments_entry_point = next.contents.results.get({ target_id: 'comments-entry-point' });
    
    /**
     * @type {import('../contents/classes/CommentsEntryPointHeader')}
     */
    this.comments_entry_point_header = comments_entry_point?.contents.get({ type: 'commentsEntryPointHeaderRenderer' }) || {};
  }
  
  get page() {
    return this.#page;
  }
}

module.exports = VideoInfo;