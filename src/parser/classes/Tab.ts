import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SectionList from './SectionList.js';
import MusicQueue from './MusicQueue.js';
import RichGrid from './RichGrid.js';
import Message from './Message.js';
import { YTNode } from '../helpers.js';

export default class Tab extends YTNode {
  static type = 'Tab';

  public title: string;
  public selected: boolean;
  public endpoint: NavigationEndpoint;
  public content: SectionList | MusicQueue | RichGrid | Message | null;

  constructor(data: RawNode) {
    super();
    this.title = data.title || 'N/A';
    this.selected = !!data.selected;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.content = Parser.parseItem(data.content, [ SectionList, MusicQueue, RichGrid, Message ]);
  }
}