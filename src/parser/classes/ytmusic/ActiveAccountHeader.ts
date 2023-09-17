import type { RawNode } from '../../../platform/lib.js';
import { YTNode } from '../../helpers.js';
import { Thumbnail } from '../../misc.js';
import { NavigationEndpoint } from '../../nodes.js';
import Text from '../misc/Text.js';

export default class ActiveAccountHeader extends YTNode {
  static type = 'ActiveAccountHeader';

  account_name: Text;
  account_photo: Thumbnail[];
  endpoint: NavigationEndpoint;
  channel_handle: Text;

  constructor(data: RawNode) {
    super();
    this.account_name = new Text(data.accountName);
    this.account_photo = Thumbnail.fromResponse(data.accountPhoto);
    this.endpoint = new NavigationEndpoint(data.settingsEndpoint);
    this.channel_handle = new Text(data.channelHandle);
  }
}