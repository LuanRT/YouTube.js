import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import TextCarouselItemView from './TextCarouselItemView.js';

export default class CarouselItemView extends YTNode {
  static type = 'CarouselItemView';

  item_type: string;
  carousel_item: TextCarouselItemView | null;

  constructor(data: RawNode) {
    super();
    this.item_type = data.itemType;
    this.carousel_item = Parser.parseItem(data.carouselItem, TextCarouselItemView);
  }
}