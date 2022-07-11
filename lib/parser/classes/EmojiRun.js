'use strict';

const Thumbnail = require('./Thumbnail');

class EmojiRun {
  constructor(data) {
    this.text =
      data.emoji?.emojiId ||
      data.emoji?.shortcuts?.[0] || null;

    this.emoji = {
      emoji_id: data.emoji.emojiId,
      shortcuts: data.emoji.shortcuts,
      search_terms: data.emoji.searchTerms,
      image: Thumbnail.fromResponse(data.emoji.image)
    };
  }
}

module.exports = EmojiRun;