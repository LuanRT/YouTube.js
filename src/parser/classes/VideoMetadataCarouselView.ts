import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import CarouselItemView from './CarouselItemView.js';
import CarouselTitleView from './CarouselTitleView.js';

export default class VideoMetadataCarouselView extends YTNode {
  static type = 'VideoMetadataCarouselView';

  carousel_titles: ObservedArray<CarouselTitleView> | null;
  carousel_items: ObservedArray<CarouselItemView> | null;

  constructor(data: RawNode) {
    super();
    this.carousel_titles = Parser.parse(data.carouselTitles, true, CarouselTitleView);
    this.carousel_items = Parser.parse(data.carouselItems, true, CarouselItemView);
  }
}