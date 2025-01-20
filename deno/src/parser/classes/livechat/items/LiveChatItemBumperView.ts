import { YTNode } from '../../../helpers.ts';
import { Parser, type RawNode } from '../../../index.ts';
import BumperUserEduContentView from './BumperUserEduContentView.ts';

export default class LiveChatItemBumperView extends YTNode {
  static type = 'LiveChatItemBumperView';
  
  content: BumperUserEduContentView | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, BumperUserEduContentView);
  }
}