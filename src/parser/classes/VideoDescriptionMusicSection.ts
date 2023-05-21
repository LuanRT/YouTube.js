import { type ObservedArray, YTNode } from '../helpers.js';
import CarouselLockup from './CarouselLockup.js';
import Parser, { type RawNode } from '../index.js';

export default class VideoDescriptionMusicSection extends YTNode {
  static type = 'VideoDescriptionMusicSection';

  carousel_lockups: ObservedArray<CarouselLockup>;
  section_title: String;
  constructor(data: RawNode) {
    super();
    this.carousel_lockups = data.carouselLockups.map((row: YTNode) => Parser.parseItem(row, CarouselLockup));
    this.section_title = data.sectionTitle.simpleText;
  }
}
