import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

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