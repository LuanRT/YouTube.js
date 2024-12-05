import type { RawNode } from '../../index.ts';
import { YTNode } from '../../helpers.ts';

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