import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import { Text } from '../misc.ts';
import Button from './Button.ts';

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