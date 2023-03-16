import Parser, { RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Author from './misc/Author.ts';
import Thumbnail from './misc/Thumbnail.ts';
import Button from './Button.ts';
import { YTNode } from '../helpers.ts';

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
  cancel_button: Button | null;
  next_button: Button | null;
  close_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.video_id = data.videoId;
    this.video_title = new Text(data.videoTitle);
    this.short_view_count = new Text(data.shortViewCountText);
    this.prefer_immediate_redirect = data.preferImmediateRedirect;
    this.count_down_secs_for_fullscreen = data.countDownSecsForFullscreen;
    this.published = new Text(data.publishedTimeText);
    this.background = Thumbnail.fromResponse(data.background);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.author = new Author(data.byline);
    this.cancel_button = Parser.parseItem(data.cancelButton, Button);
    this.next_button = Parser.parseItem(data.nextButton, Button);
    this.close_button = Parser.parseItem(data.closeButton, Button);
  }
}

export default PlayerOverlayAutoplay;