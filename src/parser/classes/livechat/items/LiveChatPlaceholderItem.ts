import { YTNode } from '../../../helpers.js';

class LiveChatPlaceholderItem extends YTNode {
  static type = 'LiveChatPlaceholderItem';

  id: string;
  timestamp: number;

  constructor(data: any) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
  }
}

export default LiveChatPlaceholderItem;