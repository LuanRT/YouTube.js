import { type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import { Text } from '../misc.ts';

export default class NotificationAction extends YTNode {
  static type = 'NotificationAction';

  public response_text: Text;

  constructor(data: RawNode) {
    super();
    this.response_text = new Text(data.responseText);
  }
}