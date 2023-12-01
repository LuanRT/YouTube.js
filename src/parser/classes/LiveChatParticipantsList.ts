import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import LiveChatParticipant from './LiveChatParticipant.js';
import Text from './misc/Text.js';

export default class LiveChatParticipantsList extends YTNode {
  static type = 'LiveChatParticipantsList';

  title: Text;
  participants: ObservedArray<LiveChatParticipant>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.participants = Parser.parseArray(data.participants, LiveChatParticipant);
  }
}