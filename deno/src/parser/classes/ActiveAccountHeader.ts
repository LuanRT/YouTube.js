import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class ActiveAccountHeader extends YTNode {
  static type = 'ActiveAccountHeader';

  public account_name: Text;
  public account_photo: Thumbnail[];
  public endpoint: NavigationEndpoint;
  public manage_account_title: Text;
  public channel_handle: Text;

  constructor(data: RawNode) {
    super();
    this.account_name = new Text(data.accountName);
    this.account_photo = Thumbnail.fromResponse(data.accountPhoto);
    this.endpoint = new NavigationEndpoint(data.serviceEndpoint);
    this.manage_account_title = new Text(data.manageAccountTitle);
    this.channel_handle = new Text(data.channelHandle);
  }
}