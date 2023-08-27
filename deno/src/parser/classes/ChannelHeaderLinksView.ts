import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class ChannelHeaderLinksView extends YTNode {
  static type = 'ChannelHeaderLinksView';

  first_link?: Text;
  more?: Text;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'firstLink')) {
      this.first_link = Text.fromAttributed(data.firstLink);
    }

    if (Reflect.has(data, 'more')) {
      this.more = Text.fromAttributed(data.more);
    }
  }
}