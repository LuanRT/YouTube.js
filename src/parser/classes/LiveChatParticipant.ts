import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';

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