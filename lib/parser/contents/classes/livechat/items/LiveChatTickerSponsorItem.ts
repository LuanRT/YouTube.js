'use strict';

// Const Parser = require('../../..');
import Text from '../../Text';
import Thumbnail from '../../Thumbnail';

class LiveChatTickerSponsorItem {
  type = 'LiveChatTickerSponsorItem';

  constructor(data) {
    this.id = data.id;
    this.detail_text = new Text(data.detailText).toString();

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data?.authorName),
      thumbnails: Thumbnail.fromResponse(data.sponsorPhoto)
    };

    this.duration_sec = data.durationSec;

    // TODO: finish this

    // Console.log(data)
  }
}

export default LiveChatTickerSponsorItem;