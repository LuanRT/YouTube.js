import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SectionList from './SectionList.js';
import MusicQueue from './MusicQueue.js';
import RichGrid from './RichGrid.js';

import { YTNode } from '../helpers.js';

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