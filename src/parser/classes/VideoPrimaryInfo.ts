import Parser from '../index';
import Text from './misc/Text';
import { YTNode } from '../helpers';
import Menu from './menus/Menu';

class VideoPrimaryInfo extends YTNode {
  static type = 'VideoPrimaryInfo';

  title: Text;
  super_title_link: Text;
  view_count: Text;
  short_view_count: Text;
  published: Text;
  menu;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.super_title_link = new Text(data.superTitleLink);
    this.view_count = new Text(data.viewCount.videoViewCountRenderer.viewCount);
    this.short_view_count = new Text(data.viewCount.videoViewCountRenderer.shortViewCount);
    this.published = new Text(data.dateText);
    this.menu = Parser.parseItem(data.videoActions, Menu);
  }
}

export default VideoPrimaryInfo;