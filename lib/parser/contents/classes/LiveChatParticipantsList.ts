'use strict';

import Parser from '..';
import Text from './Text';

class LiveChatParticipantsList {
  type = 'LiveChatParticipantsList';

  constructor(data) {
    this.title = new Text(data.title);
    this.participants = Parser.parse(data.participants);
  }
}

export default LiveChatParticipantsList;