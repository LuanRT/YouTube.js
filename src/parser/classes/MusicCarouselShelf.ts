import Parser from '../index';

import MusicTwoRowItem from './MusicTwoRowItem';
import MusicResponsiveListItem from './MusicResponsiveListItem';
import MusicCarouselShelfBasicHeader from './MusicCarouselShelfBasicHeader';
import MusicNavigationButton from './MusicNavigationButton';

import { YTNode } from '../helpers';

class MusicCarouselShelf extends YTNode {
  static type = 'MusicCarouselShelf';

  header: MusicCarouselShelfBasicHeader | null;
  contents: Array<MusicTwoRowItem | MusicResponsiveListItem | MusicNavigationButton>;
  num_items_per_column: number | null;

  constructor(data: any) {
    super();
    this.header = Parser.parseItem<MusicCarouselShelfBasicHeader>(data.header, MusicCarouselShelfBasicHeader);
    this.contents = Parser.parseArray<MusicTwoRowItem | MusicResponsiveListItem | MusicNavigationButton>(data.contents, [ MusicTwoRowItem, MusicResponsiveListItem, MusicNavigationButton ]);
    this.num_items_per_column = Reflect.has(data, 'numItemsPerColumn') ? parseInt(data.numItemsPerColumn) : null;
  }
}

export default MusicCarouselShelf;