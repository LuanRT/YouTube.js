'use strict';

const Thumbnail = require('./Thumbnail');

class VideoDetails {
  /**
   * @type {string}
   */
   id;
   /**
    * @type {string}
    */
   channel_id;
   /**
    * @type {string}
    */
   title;
   /**
    * @type {string[]}
    */
   keywords;
   /**
    * @type {string}
    */
   short_description;
   /**
    * @type {string}
    */
   author;

   constructor(item) {
       this.id = item.videoId;
       this.channel_id = item.channelId;
       this.title = item.title;
       this.duration = parseInt(item.lengthSeconds);
       this.keywords = item.keywords;
       this.is_owner_viewing = !!item.isOwnerViewing;
       this.short_description = item.shortDescription;
       this.thumbnail = Thumbnail.fromResponse(item.thumbnail);
       this.allow_ratings = !!item.allowRatings;
       this.view_count = parseInt(item.viewCount);
       this.author = item.author;
       this.is_private = !!item.isPrivate;
       this.is_live_content = !!item.isLiveContent;
       this.is_crawlable = !!item.isCrawlable;
   }
}

module.exports = VideoDetails;