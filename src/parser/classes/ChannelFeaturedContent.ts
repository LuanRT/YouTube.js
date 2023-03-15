import { YTNode } from '../helpers.js';
import Parser, { RawNode } from '../index.js';
import Text from './misc/Text.js';

class ChannelFeaturedContent extends YTNode {
  static type = 'ChannelFeaturedContent';

  title: Text;
  items;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.items = Parser.parseArray(data.items);
  }
}

export default ChannelFeaturedContent;