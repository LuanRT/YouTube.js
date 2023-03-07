import Thumbnail from './Thumbnail.js';
import type { RawNode } from '../../index.js';

class VideoDetails {
  id: string;
  channel_id: string;
  title: string;
  duration: number;
  keywords: string[];
  is_owner_viewing: boolean;
  short_description: string;
  thumbnail: Thumbnail[];
  allow_ratings: boolean;
  view_count: number;
  author: string;
  is_private: boolean;
  is_live: boolean;
  is_live_content: boolean;
  is_upcoming: boolean;
  is_crawlable: boolean;

  constructor(data: RawNode) {
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
    this.is_live = !!data.isLive;
    this.is_live_content = !!data.isLiveContent;
    this.is_upcoming = !!data.isUpcoming;
    this.is_crawlable = !!data.isCrawlable;
  }
}

export default VideoDetails;