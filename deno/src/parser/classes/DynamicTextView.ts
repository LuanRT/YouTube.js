import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class DynamicTextView extends YTNode {
  static type = 'DynamicTextView';

  text: string;

  constructor(data: RawNode) {
    super();
    this.text = data.text.content;
  }
}