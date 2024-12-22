import { YTNode } from '../../../helpers.js';
import { Parser, type RawNode } from '../../../index.js';
import BumperUserEduContentView from './BumperUserEduContentView.js';

export default class LiveChatItemBumperView extends YTNode {
  static type = 'LiveChatItemBumperView';
  
  content: BumperUserEduContentView | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, BumperUserEduContentView);
  }
}