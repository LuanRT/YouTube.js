import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class ChannelFeaturedContent extends YTNode {
  static type = 'ChannelFeaturedContent';

  title: Text;
  items;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.items = Parser.parse(data.items);
  }
}

export default ChannelFeaturedContent;