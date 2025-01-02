import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode, Parser } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import LikeButton from './LikeButton.js';
import VideoOwner from './VideoOwner.js';
import VideoViewCount from './VideoViewCount.js';
import VideoBadgeView from './VideoBadgeView.js';
import Text from './misc/Text.js';

export default class VideoMetadata extends YTNode {
  static type = 'VideoMetadata';

  title: Text;
  description: Text;
  allow_ratings: boolean;
  date_text: Text;
  video_id: string;
  like_button: LikeButton | null;
  owner: VideoOwner | null;
  view_count: VideoViewCount | null;
  is_limited_state: boolean;
  published_time_text: Text;
  may_truncate_channel_name: boolean;
  accessibility_text: string;
  onClickCommand: NavigationEndpoint;
  featured_metadata: ObservedArray<VideoBadgeView> | null;
  education_text: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.allow_ratings = data.allowRatings;
    this.date_text = new Text(data.dateText);
    this.video_id = data.videoId;
    this.like_button = Parser.parseItem(data.likeButton, LikeButton);
    this.owner = Parser.parseItem(data.owner, VideoOwner);
    this.view_count = Parser.parseItem(data.viewCount, VideoViewCount);
    this.is_limited_state = data.isLimitedState;
    this.published_time_text = new Text(data.publishedTimeText);
    this.may_truncate_channel_name = data.mayTruncateChannelName;
    this.accessibility_text = data.accessibilityText;
    this.onClickCommand = new NavigationEndpoint(data.onClickCommand);
    this.featured_metadata = Parser.parse(data.featuredMetadata, true, VideoBadgeView);
    this.education_text = new Text(data.educationText);
  }
}