import { Parser, type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import SectionList from './SectionList.ts';
import MusicQueue from './MusicQueue.ts';
import RichGrid from './RichGrid.ts';
import Message from './Message.ts';
import { YTNode } from '../helpers.ts';

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