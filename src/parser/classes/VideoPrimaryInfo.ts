import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';

import Text from './misc/Text.js';
import Menu from './menus/Menu.js';
import MetadataBadge from './MetadataBadge.js';
import VideoViewCount from './VideoViewCount.js';

export default class VideoPrimaryInfo extends YTNode {
  static type = 'VideoPrimaryInfo';

  public title: Text;
  public super_title_link?: Text;
  public station_name?: Text;
  public view_count: VideoViewCount | null;
  public badges: ObservedArray<MetadataBadge>;
  public published: Text;
  public relative_date: Text;
  public menu: Menu | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);

    if ('superTitleLink' in data)
      this.super_title_link = new Text(data.superTitleLink);

    if ('stationName' in data)
      this.station_name = new Text(data.stationName);
    
    this.view_count = Parser.parseItem(data.viewCount, VideoViewCount);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);
    this.published = new Text(data.dateText);
    this.relative_date = new Text(data.relativeDateText);
    this.menu = Parser.parseItem(data.videoActions, Menu);
  }
}