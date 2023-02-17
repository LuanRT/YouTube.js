import Parser from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import SectionList from './SectionList.ts';
import MusicQueue from './MusicQueue.ts';
import RichGrid from './RichGrid.ts';

import { YTNode } from '../helpers.ts';

class Tab extends YTNode {
  static type = 'Tab';

  title: string;
  selected: boolean;
  endpoint;
  content;

  constructor(data: any) {
    super();
    this.title = data.title || 'N/A';
    this.selected = data.selected || false;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.content = Parser.parseItem<SectionList | MusicQueue | RichGrid>(data.content, [ SectionList, MusicQueue, RichGrid ]);
  }
}

export default Tab;