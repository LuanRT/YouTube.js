import { type ObservedArray, YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class ChannelFeaturedContent extends YTNode {
  static type = 'ChannelFeaturedContent';

  title: Text;
  items: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.items = Parser.parseArray(data.items);
  }
}