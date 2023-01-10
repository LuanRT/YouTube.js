import Parser from '../index';
import Text from './misc/Text';
import { ObservedArray, YTNode } from '../helpers';
import type LiveChatParticipant from './LiveChatParticipant';

class LiveChatParticipantsList extends YTNode {
  static type = 'LiveChatParticipantsList';

  title: Text;
  participants: ObservedArray<LiveChatParticipant>;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.participants = Parser.parseArray<LiveChatParticipant>(data.participants);
  }
}

export default LiveChatParticipantsList;