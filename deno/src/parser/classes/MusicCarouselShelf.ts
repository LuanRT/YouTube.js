import Parser from '../index.ts';

import MusicTwoRowItem from './MusicTwoRowItem.ts';
import MusicResponsiveListItem from './MusicResponsiveListItem.ts';
import MusicCarouselShelfBasicHeader from './MusicCarouselShelfBasicHeader.ts';
import MusicNavigationButton from './MusicNavigationButton.ts';

import { ObservedArray, YTNode } from '../helpers.ts';

class MusicCarouselShelf extends YTNode {
  static type = 'MusicCarouselShelf';

  header: MusicCarouselShelfBasicHeader | null;
  contents: ObservedArray<MusicTwoRowItem | MusicResponsiveListItem | MusicNavigationButton>;
  num_items_per_column: number | null;

  constructor(data: any) {
    super();
    this.header = Parser.parseItem<MusicCarouselShelfBasicHeader>(data.header, MusicCarouselShelfBasicHeader);
    this.contents = Parser.parseArray(data.contents, [ MusicTwoRowItem, MusicResponsiveListItem, MusicNavigationButton ]);
    this.num_items_per_column = Reflect.has(data, 'numItemsPerColumn') ? parseInt(data.numItemsPerColumn) : null;
  }
}

export default MusicCarouselShelf;