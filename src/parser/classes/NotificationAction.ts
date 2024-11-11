import { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import { Text } from '../misc.js';

export default class NotificationAction extends YTNode {
  static type = 'NotificationAction';

  public response_text: Text;

  constructor(data: RawNode) {
    super();
    this.response_text = new Text(data.responseText);
  }
}