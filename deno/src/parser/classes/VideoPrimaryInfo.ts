import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import type { ObservedArray } from '../helpers.ts';
import Parser from '../index.ts';
import Text from './misc/Text.ts';
import MetadataBadge from './MetadataBadge.ts';
import Menu from './menus/Menu.ts';

class VideoPrimaryInfo extends YTNode {
  static type = 'VideoPrimaryInfo';

  title: Text;
  super_title_link: Text;
  view_count: Text;
  short_view_count: Text;
  badges: ObservedArray<MetadataBadge>;
  published: Text;
  relative_date: Text;
  menu: Menu | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.super_title_link = new Text(data.superTitleLink);
    this.view_count = new Text(data.viewCount?.videoViewCountRenderer?.viewCount);
    this.short_view_count = new Text(data.viewCount?.videoViewCountRenderer?.shortViewCount);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);
    this.published = new Text(data.dateText);
    this.relative_date = new Text(data.relativeDateText);
    this.menu = Parser.parseItem(data.videoActions, Menu);
  }
}

export default VideoPrimaryInfo;