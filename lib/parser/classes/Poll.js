'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class Poll {
  type = 'Poll';

  constructor(data) {
    this.choices = data.choices.map((choice) => ({
      text: new Text(choice.text).toString(),
      select_endpoint: choice.selectServiceEndpoint ? new NavigationEndpoint(choice.selectServiceEndpoint) : null,
      deselect_endpoint: choice.deselectServiceEndpoint ? new NavigationEndpoint(choice.deselectServiceEndpoint) : null,
      vote_ratio_if_selected: choice?.voteRatioIfSelected || null,
      vote_percentage_if_selected: new Text(choice.votePercentageIfSelected),
      vote_ratio_if_not_selected: choice?.voteRatioIfSelected || null,
      vote_percentage_if_not_selected: new Text(choice.votePercentageIfSelected),
      image: choice.image ? Thumbnail.fromResponse(choice.image) : null
    }));

    if (data.type)
      this.poll_type = data.type;

    if (data.totalVotes)
      this.total_votes = new Text(data.totalVotes);

    if (data.liveChatPollId)
      this.live_chat_poll_id = data.liveChatPollId;
  }
}

module.exports = Poll;