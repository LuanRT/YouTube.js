import Parser from '../index';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import Author from './misc/Author';
import { YTNode } from '../helpers';

class GridVideo extends YTNode {
  static type = 'GridVideo';

  id: string;
  title: Text;
  thumbnails: Thumbnail[];
  thumbnail_overlays;
  rich_thumbnail;
  published: Text;
  duration: Text | string;
  author: Author;
  views: Text;
  short_view_count: Text;
  endpoint: NavigationEndpoint;
  menu;

  constructor(data: any) {
    super();
    const length_alt = data.thumbnailOverlays.find((overlay: any) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
    this.published = new Text(data.publishedTimeText);
    this.duration = data.lengthText ? new Text(data.lengthText) : length_alt?.text ? new Text(length_alt.text) : '';
    this.author = data.shortBylineText && new Author(data.shortBylineText, data.ownerBadges);
    this.views = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parse(data.menu);
  }
}

export default GridVideo;