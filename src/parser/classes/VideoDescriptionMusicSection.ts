import { type ObservedArray, YTNode } from '../helpers.js';
import CarouselLockup from './CarouselLockup.js';
import Parser, { type RawNode } from '../index.js';
import { Text } from '../misc.js';

export default class VideoDescriptionMusicSection extends YTNode {
  static type = 'VideoDescriptionMusicSection';

  carousel_lockups: ObservedArray<CarouselLockup>;
  section_title: Text;
  constructor(data: RawNode) {
    super();
    this.carousel_lockups = Parser.parseArray(data.carouselLockups, CarouselLockup);
    this.section_title = new Text(data.sectionTitle);
  }
}
