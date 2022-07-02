'use strict';

const Parser = require('../../..');
const Text = require('../../Text');
const Thumbnail = require('../../Thumbnail');

class LiveChatBannerPoll {
  type = 'LiveChatBannerPoll';

  constructor(data) {
    this.poll_question = new Text(data.pollQuestion);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);

    this.choices = data.pollChoices.map((choice) => ({
      option_id: choice.pollOptionId,
      text: new Text(choice.text).toString()
    }));

    this.collapsed_state_entity_key = data.collapsedStateEntityKey;
    this.live_chat_poll_state_entity_key = data.liveChatPollStateEntityKey;
    this.context_menu_button = Parser.parse(data.contextMenuButton);
  }
}

module.exports = LiveChatBannerPoll;