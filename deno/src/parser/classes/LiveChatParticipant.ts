import Parser from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

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