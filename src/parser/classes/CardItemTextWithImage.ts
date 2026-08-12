import CardItemTextCollection from './CardItemTextCollection.js';
import type Thumbnail from './misc/Thumbnail.js';
import ThemedImage from './ThemedImage.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import type { RawNode } from '../index.js';

export default class CardItemTextWithImage extends YTNode {
  static type = 'CardItemTextWithImage';

  image: ThemedImage | null;
  thumbnails: Thumbnail[];
  text_collections: CardItemTextCollection[];

  constructor(data: RawNode) {
    super();

    this.image = Parser.parseItem(data.imageRenderer, ThemedImage);
    this.thumbnails = this.image?.thumbnails || [];

    this.text_collections = (data.textCollectionRenderer || []).map(
      (collection: RawNode) => Parser.parseItem(collection, CardItemTextCollection)
    );
  }
}
