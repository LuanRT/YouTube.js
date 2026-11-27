import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import TextCarouselItemView from './TextCarouselItemView.js';

export default class CtaCarouselItemView extends YTNode {
  static type = 'CtaCarouselItemView';

  text_carousel: TextCarouselItemView | null;

  constructor(data: RawNode) {
    super();
    this.text_carousel = Parser.parseItem(data.textCarousel, TextCarouselItemView);
  }
}
