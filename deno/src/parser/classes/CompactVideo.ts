import { timeToSeconds } from '../../utils/Utils.ts';
import { YTNode, type ObservedArray, type SuperParsedResult } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Menu from './menus/Menu.ts';
import MetadataBadge from './MetadataBadge.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class CompactVideo extends YTNode {
  static type = 'CompactVideo';

  id: string;
  thumbnails: Thumbnail[];
  rich_thumbnail?: SuperParsedResult<YTNode>;
  title: Text;
  author: Author;
  view_count: Text;
  short_view_count: Text;
  published: Text;
  badges: MetadataBadge[];

  duration: {
    text: string;
    seconds: number;
  };

  thumbnail_overlays: ObservedArray<YTNode>;
  endpoint: NavigationEndpoint;
  menu: Menu | null;

  constructor(data: RawNode) {
    super();
    this.id = data.videoId;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail) || null;

    if (Reflect.has(data, 'richThumbnail')) {
      this.rich_thumbnail = Parser.parse(data.richThumbnail);
    }

    this.title = new Text(data.title);
    this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnail);
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.published = new Text(data.publishedTimeText);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);

    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(new Text(data.lengthText).toString())
    };

    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parseItem(data.menu, Menu);
  }

  get best_thumbnail() {
    return this.thumbnails[0];
  }

  get is_fundraiser(): boolean {
    return this.badges.some((badge) => badge.label === 'Fundraiser');
  }

  get is_live(): boolean {
    return this.badges.some((badge) => {
      if (badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW' || badge.label === 'LIVE')
        return true;
    });
  }

  get is_new(): boolean {
    return this.badges.some((badge) => badge.label === 'New');
  }

  get is_premiere(): boolean {
    return this.badges.some((badge) => badge.style === 'PREMIERE');
  }
}