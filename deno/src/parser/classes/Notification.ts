import Parser from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

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