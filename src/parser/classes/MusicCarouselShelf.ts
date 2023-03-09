import Parser from '../index.js';

import MusicTwoRowItem from './MusicTwoRowItem.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import MusicCarouselShelfBasicHeader from './MusicCarouselShelfBasicHeader.js';
import MusicNavigationButton from './MusicNavigationButton.js';

import { ObservedArray, YTNode } from '../helpers.js';

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