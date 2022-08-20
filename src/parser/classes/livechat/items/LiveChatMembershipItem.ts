import Parser from '../../../index';
import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import NavigationEndpoint from '../../NavigationEndpoint';
import { YTNode } from '../../../helpers';

class LiveChatMembershipItem extends YTNode {
  static type = 'LiveChatMembershipItem';

  id: string;
  timestamp: number;
  header_subtext: Text;

  author: {
    id: string;
    name: Text;
    thumbnails: Thumbnail[];
    badges: any;
  };

  menu_endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.header_subtext = new Text(data.headerSubtext);

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data?.authorName),
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
      badges: Parser.parse(data.authorBadges)
    };

    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
  }
}

export default LiveChatMembershipItem;