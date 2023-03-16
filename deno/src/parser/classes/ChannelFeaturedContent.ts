import { YTNode } from '../helpers.ts';
import Parser, { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

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