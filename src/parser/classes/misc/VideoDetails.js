import Thumbnail from './Thumbnail';

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

  constructor(data) {
    this.id = data.videoId;
    this.channel_id = data.channelId;
    this.title = data.title;
    this.duration = parseInt(data.lengthSeconds);
    this.keywords = data.keywords;
    this.is_owner_viewing = !!data.isOwnerViewing;
    this.short_description = data.shortDescription;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.allow_ratings = !!data.allowRatings;
    this.view_count = parseInt(data.viewCount);
    this.author = data.author;
    this.is_private = !!data.isPrivate;
    this.is_live_content = !!data.isLiveContent;
    this.is_crawlable = !!data.isCrawlable;
  }
}

export default VideoDetails;