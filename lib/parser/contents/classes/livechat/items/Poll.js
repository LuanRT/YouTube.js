'use strict';

const Parser = require('../../..');
const Text = require('../../Text');
const NavigationEndpoint = require('../../NavigationEndpoint');

class Poll {
  type = 'Poll';
  
  constructor(data) {
    this.header = Parser.parse(data.header, 'livechat/items');
   
    this.choices = data.choices.map((choice) => ({
      text: new Text(choice.text).toString(),
      selected: choice.selected,
      vote_ratio: choice.voteRatio,
      vote_percentage: new Text(choice.votePercentage).toString(),
      select_endpoint: new NavigationEndpoint(choice.selectServiceEndpoint)
    }));
    
    this.live_chat_poll_id = data.liveChatPollId;
  }
}

module.exports = Poll;