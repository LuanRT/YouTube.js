import Parser from '../index';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class Notification extends YTNode {
  static type = 'Notification';

  thumbnails: Thumbnail[];
  video_thumbnails: Thumbnail[];
  short_message: Text;
  sent_time: Text;
  notification_id: any;
  endpoint: NavigationEndpoint;
  record_click_endpoint: NavigationEndpoint;
  menu;
  read: boolean;

  constructor(data: any) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_thumbnails = Thumbnail.fromResponse(data.videoThumbnail);
    this.short_message = new Text(data.shortMessage);
    this.sent_time = new Text(data.sentTimeText);
    this.notification_id = data.notificationId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.record_click_endpoint = new NavigationEndpoint(data.recordClickEndpoint);
    this.menu = Parser.parse(data.contextualMenu);
    this.read = data.read;
  }
}

export default Notification;