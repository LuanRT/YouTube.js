import Parser from '../index.ts';
import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

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