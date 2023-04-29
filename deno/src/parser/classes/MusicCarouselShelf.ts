import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';

import MusicCarouselShelfBasicHeader from './MusicCarouselShelfBasicHeader.ts';
import MusicNavigationButton from './MusicNavigationButton.ts';
import MusicResponsiveListItem from './MusicResponsiveListItem.ts';
import MusicTwoRowItem from './MusicTwoRowItem.ts';

export default class MusicCarouselShelf extends YTNode {
  static type = 'MusicCarouselShelf';

  header: MusicCarouselShelfBasicHeader | null;
  contents: ObservedArray<MusicTwoRowItem | MusicResponsiveListItem | MusicNavigationButton>;
  num_items_per_column?: number;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, MusicCarouselShelfBasicHeader);
    this.contents = Parser.parseArray(data.contents, [ MusicTwoRowItem, MusicResponsiveListItem, MusicNavigationButton ]);

    if (Reflect.has(data, 'numItemsPerColumn')) {
      this.num_items_per_column = parseInt(data.numItemsPerColumn);
    }
  }
}