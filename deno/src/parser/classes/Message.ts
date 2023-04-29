import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class Message extends YTNode {
  static type = 'Message';

  text: Text;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
  }
}