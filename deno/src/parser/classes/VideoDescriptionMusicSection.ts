import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import { Text } from '../misc.ts';
import CarouselLockup from './CarouselLockup.ts';

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
