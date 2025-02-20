import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SectionList from './SectionList.js';
import MusicQueue from './MusicQueue.js';
import RichGrid from './RichGrid.js';
import { YTNode } from '../helpers.js';

export default class Tab extends YTNode {
  static type = 'Tab';

  title: string;
  selected: boolean;
  endpoint: NavigationEndpoint;
  content: SectionList | MusicQueue | RichGrid | null;

  constructor(data: RawNode) {
    super();
    this.title = data.title || 'N/A';
    this.selected = !!data.selected;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    const contents = Parser.parseItems(data.content, [ SectionList, MusicQueue, RichGrid ]);
    this.content = null;
    if (contents !== null && contents.length > 0) {
      for (const item of contents) {
        if (item.is(SectionList) && item.contents.length > 0) {
          this.content = item;
        } else if (item.is(RichGrid) && item.contents.length > 0) {
          this.content = item;
        } else if (item.is(MusicQueue)) {
          this.content = item;
        }
      }

      if (this.content === null) {
        this.content = contents[0];
      }
    }
  }
}