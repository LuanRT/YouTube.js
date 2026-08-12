import CardItemTextCollection from './CardItemTextCollection.js';
import ThemedImage from './ThemedImage.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import type { RawNode } from '../index.js';

export default class OfferItem extends YTNode {
  static type = 'OfferItem';

  image: ThemedImage | null;
  heading: CardItemTextCollection | null;
  description: CardItemTextCollection | null;

  constructor(data: RawNode) {
    super();
    this.image = Parser.parseItem(data.imageRenderer, ThemedImage);
    this.heading = Parser.parseItem(data.headingRenderer, CardItemTextCollection);
    this.description = Parser.parseItem(data.descriptionRenderer, CardItemTextCollection);
  }
}
