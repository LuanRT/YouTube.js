import { Parser, type RawNode } from '../index.ts';
import { YTNode, type ObservedArray } from '../helpers.ts';

import Text from './misc/Text.ts';
import Menu from './menus/Menu.ts';
import MetadataBadge from './MetadataBadge.ts';
import VideoViewCount from './VideoViewCount.ts';

export default class VideoPrimaryInfo extends YTNode {
  static type = 'VideoPrimaryInfo';

  public title: Text;
  public super_title_link?: Text;
  public view_count: VideoViewCount | null;
  public badges: ObservedArray<MetadataBadge>;
  public published: Text;
  public relative_date: Text;
  public menu: Menu | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);

    if (Reflect.has(data, 'superTitleLink'))
      this.super_title_link = new Text(data.superTitleLink);

    this.view_count = Parser.parseItem(data.viewCount, VideoViewCount);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);
    this.published = new Text(data.dateText);
    this.relative_date = new Text(data.relativeDateText);
    this.menu = Parser.parseItem(data.videoActions, Menu);
  }
}