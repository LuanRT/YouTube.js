import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';

export default class LiveChatPlaceholderItem extends YTNode {
  static type = 'LiveChatPlaceholderItem';

  id: string;
  timestamp: number;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
  }
}