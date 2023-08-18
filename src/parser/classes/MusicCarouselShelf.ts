import { YTNode, type ObservedArray } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';

import MusicCarouselShelfBasicHeader from './MusicCarouselShelfBasicHeader.js';
import MusicMultiRowListItem from './MusicMultiRowListItem.js';
import MusicNavigationButton from './MusicNavigationButton.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import MusicTwoRowItem from './MusicTwoRowItem.js';

export default class MusicCarouselShelf extends YTNode {
  static type = 'MusicCarouselShelf';

  header: MusicCarouselShelfBasicHeader | null;
  contents: ObservedArray<MusicTwoRowItem | MusicResponsiveListItem | MusicMultiRowListItem | MusicNavigationButton>;
  num_items_per_column?: number;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, MusicCarouselShelfBasicHeader);
    this.contents = Parser.parseArray(data.contents, [ MusicTwoRowItem, MusicResponsiveListItem, MusicMultiRowListItem, MusicNavigationButton ]);

    if (Reflect.has(data, 'numItemsPerColumn')) {
      this.num_items_per_column = parseInt(data.numItemsPerColumn);
    }
  }
}