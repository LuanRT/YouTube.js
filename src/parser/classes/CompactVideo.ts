import Parser from '../index';
import Text from './misc/Text';
import Author from './misc/Author';
import { timeToSeconds } from '../../utils/Utils';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import type Menu from './menus/Menu';

import { YTNode } from '../helpers';

class CompactVideo extends YTNode {
  static type = 'CompactVideo';

  id: string;
  thumbnails: Thumbnail[];
  rich_thumbnail;
  title: Text;
  author: Author;
  view_count: Text;
  short_view_count: Text;
  published: Text;
  is_live: Boolean;

  duration: {
    text: string;
    seconds: number;
  };

  thumbnail_overlays;
  endpoint: NavigationEndpoint;
  menu: Menu | null;

  constructor(data: any) {
    super();
    this.id = data.videoId;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail) || null;
    this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
    this.title = new Text(data.title);
    this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnail);
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.published = new Text(data.publishedTimeText);
    this.is_live = data.badges?.some((badge: any) => badge.metadataBadgeRenderer.style == 'BADGE_STYLE_TYPE_LIVE_NOW') || false;

    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(new Text(data.lengthText).toString())
    };

    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parseItem<Menu>(data.menu);
  }

  get best_thumbnail() {
    return this.thumbnails[0];
  }
}

export default CompactVideo;