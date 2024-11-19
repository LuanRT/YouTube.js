import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import Text from '../../misc/Text.js';

export default class LiveChatModeChangeMessage extends YTNode {
  static type = 'LiveChatModeChangeMessage';

  id: string;
  icon_type: string;
  text: Text;
  subtext: Text;
  timestamp: number;
  timestamp_usec: string;
  timestamp_text: Text;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.icon_type = data.icon.iconType;
    this.text = new Text(data.text);
    this.subtext = new Text(data.subtext);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.timestamp_usec = data.timestampUsec;
    this.timestamp_text = new Text(data.timestampText);
  }
}
