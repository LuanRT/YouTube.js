import CardItemText from './CardItemText.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import type { RawNode } from '../index.js';

export default class CardItemTextCollection extends YTNode {
  static type = 'CardItemTextCollection';

  texts: CardItemText[];

  constructor(data: RawNode) {
    super();
    this.texts = (data.textRenderers || []).map(
      (renderer: RawNode) => Parser.parseItem(renderer, CardItemText)
    );
  }
}
