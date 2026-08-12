import CardItemActions from './CardItemActions.js';
import CardItemTextWithImage from './CardItemTextWithImage.js';
import CardItemTextCollection from './CardItemTextCollection.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import type { RawNode } from '../index.js';

export default class CardItem extends YTNode {
  static type = 'CardItem';

  heading: CardItemTextWithImage | CardItemTextCollection | null;
  additional_info: CardItemActions | null;

  constructor(data: RawNode) {
    super();
    this.heading = Parser.parseItem(data.headingRenderer, [ CardItemTextWithImage, CardItemTextCollection ]);
    this.additional_info = Parser.parseItem(data.additionalInfoRenderer, CardItemActions);
  }
}
