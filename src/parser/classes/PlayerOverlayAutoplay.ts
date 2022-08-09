import Parser from '../index';
import Text from './misc/Text';
import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class PlayerOverlayAutoplay extends YTNode {
  static type = 'PlayerOverlayAutoplay';
  
  title: Text;
  video_id: string;
  video_title: Text;
  short_view_count: Text;
  prefer_immediate_redirect: any;
  count_down_secs_for_fullscreen: any; 
  published: Text;
  background: Thumbnail[];
  thumbnail_overlays;
  author: Author;
  cancel_button;
  next_button;
  close_button;
  
  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.video_id = data.videoId;
    this.video_title = new Text(data.videoTitle);
    this.short_view_count = new Text(data.shortViewCountText);
    this.prefer_immediate_redirect = data.preferImmediateRedirect;
    this.count_down_secs_for_fullscreen = data.countDownSecsForFullscreen;
    this.published = new Text(data.publishedTimeText);
    this.background = Thumbnail.fromResponse(data.background);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.author = new Author(data.byline);
    this.cancel_button = Parser.parse(data.cancelButton);
    this.next_button = Parser.parse(data.nextButton);
    this.close_button = Parser.parse(data.closeButton);
  }
}

export default PlayerOverlayAutoplay;