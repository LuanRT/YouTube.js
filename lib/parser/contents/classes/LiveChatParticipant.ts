'use strict';

import Parser from '..';
import Text from './Text';
import Thumbnail from './Thumbnail';

class LiveChatParticipant {
  type = 'LiveChatParticipant';

  constructor(data) {
    this.name = new Text(data.authorName);
    this.photo = Thumbnail.fromResponse(data.authorPhoto);
    this.badges = Parser.parse(data.authorBadges);
  }
}

export default LiveChatParticipant;