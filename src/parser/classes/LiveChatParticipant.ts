import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class LiveChatParticipant extends YTNode {
  static type = 'LiveChatParticipant';

  name: Text;
  photo: Thumbnail[];
  badges: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.name = new Text(data.authorName);
    this.photo = Thumbnail.fromResponse(data.authorPhoto);
    this.badges = Parser.parseArray(data.authorBadges);
  }
}