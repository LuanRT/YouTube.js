import Parser from '../index.js';
import Text from './misc/Text.js';
import { ObservedArray, YTNode } from '../helpers.js';
import LiveChatParticipant from './LiveChatParticipant.js';

class LiveChatParticipantsList extends YTNode {
  static type = 'LiveChatParticipantsList';

  title: Text;
  participants: ObservedArray<LiveChatParticipant>;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.participants = Parser.parseArray(data.participants, LiveChatParticipant);
  }
}

export default LiveChatParticipantsList;