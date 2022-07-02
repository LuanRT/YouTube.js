'use strict';

// Const Parser = require('../../..');
const Text = require('../../Text');
const Thumbnail = require('../../Thumbnail');

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

module.exports = LiveChatTickerSponsorItem;