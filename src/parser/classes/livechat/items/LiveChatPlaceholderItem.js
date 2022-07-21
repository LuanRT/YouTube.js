import { YTNode } from '../../../helpers';

class LiveChatPlaceholderItem extends YTNode {
  static type = 'LiveChatPlaceholderItem';

  constructor(data) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
  }
}

export default LiveChatPlaceholderItem;