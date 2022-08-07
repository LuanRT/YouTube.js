import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import SectionList from './SectionList';
import MusicQueue from './MusicQueue';
import RichGrid from './RichGrid';

import { YTNode } from '../helpers';

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