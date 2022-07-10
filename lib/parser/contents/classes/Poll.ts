'use strict';

import Text from './Text';
import Thumbnail from './Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

class Poll {
  type = 'Poll';

  constructor(data) {
    this.choices = data.choices.map((choice) => ({
      text: new Text(choice.text).toString(),
      select_endpoint: new NavigationEndpoint(choice.selectServiceEndpoint),
      deselect_endpoint: new NavigationEndpoint(choice.deselectServiceEndpoint),
      vote_ratio_if_selected: choice.voteRatioIfSelected,
      vote_percentage_if_selected: new Text(choice.votePercentageIfSelected),
      vote_ratio_if_not_selected: choice.voteRatioIfSelected,
      vote_percentage_if_not_selected: new Text(choice.votePercentageIfSelected),
      image: Thumbnail.fromResponse(choice.image)
    }));

    this.total_votes = new Text(data.totalVotes);
    this.poll_type = data.type;
  }
}

export default Poll;