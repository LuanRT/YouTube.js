import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import { Text } from '../misc.js';
import Button from './Button.js';

export default class ChannelSwitcherHeader extends YTNode {
  static type = 'ChannelSwitcherHeader';

  title: string;
  button?: Button | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title).toString();

    if (Reflect.has(data, 'button')) {
      this.button = Parser.parseItem(data.button, Button);
    }
  }
}