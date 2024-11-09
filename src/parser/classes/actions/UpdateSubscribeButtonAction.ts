import type { RawNode } from '../../index.js';
import { YTNode } from '../../helpers.js';

export default class UpdateSubscribeButtonAction extends YTNode {
  static type = 'UpdateSubscribeButtonAction';

  public channel_id: string;
  public subscribed: boolean;

  constructor(data: RawNode) {
    super();
    this.channel_id = data.channelId;
    this.subscribed = data.subscribed;
  }
}