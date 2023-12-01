import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import LiveChatParticipant from './LiveChatParticipant.ts';
import Text from './misc/Text.ts';

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