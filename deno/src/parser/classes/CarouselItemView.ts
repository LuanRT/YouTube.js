import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import TextCarouselItemView from './TextCarouselItemView.ts';

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