import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class Message extends YTNode {
  static type = 'Message';

  text: Text;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
  }
}