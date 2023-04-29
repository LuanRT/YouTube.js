import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ChannelMobileHeader extends YTNode {
  static type = 'ChannelMobileHeader';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}