import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class DynamicTextView extends YTNode {
  static type = 'DynamicTextView';

  text: string;

  constructor(data: RawNode) {
    super();
    this.text = data.text.content;
  }
}