import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import CarouselItemView from './CarouselItemView.ts';
import CarouselTitleView from './CarouselTitleView.ts';

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