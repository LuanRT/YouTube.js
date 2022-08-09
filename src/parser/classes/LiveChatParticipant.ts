import Parser from '../index';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class LiveChatParticipant extends YTNode {
  static type = 'LiveChatParticipant';

  name: Text;
  photo: Thumbnail[];
  badges;

  constructor(data: any) {
    super();
    this.name = new Text(data.authorName);
    this.photo = Thumbnail.fromResponse(data.authorPhoto);
    this.badges = Parser.parse(data.authorBadges);
  }
}

export default LiveChatParticipant;