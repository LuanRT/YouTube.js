'use strict';

const Thumbnail = require('./Thumbnail');

class VideoDetails {
  constructor(data) {
    this.id = data.videoId;
    this.title = data.title;
    this.duration = parseInt(data.lengthSeconds);
    this.keywords = data.keywords || [];
    this.channel_id = data.channelId;
    this.is_owner_viewing = data.isOwnerViewing;
    this.description = data.shortDescription;
    this.is_crawlable = data.isCrawlable;
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.allow_ratings = data.allowRatings;
    this.view_count = parseInt(data.viewCount);
    this.author = data.author;
    this.is_private = data.isPrivate;
    this.is_unplugged_corpus = data.isUnpluggedCorpus;
    this.is_live_content = data.isLiveContent;
  }
}

module.exports = VideoDetails;