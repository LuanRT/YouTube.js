import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class Poll extends YTNode {
  static type = 'Poll';

  choices: {
    text: Text;
    select_endpoint: NavigationEndpoint | null;
    deselect_endpoint: NavigationEndpoint | null;
    vote_ratio_if_selected: number | null;
    vote_percentage_if_selected: Text;
    vote_ratio_if_not_selected: number | null;
    vote_percentage_if_not_selected: Text;
    image: Thumbnail[] | null;
  }[];

  poll_type?: string;
  total_votes?: Text;
  live_chat_poll_id?: string;

  constructor(data: RawNode) {
    super();

    this.choices = data.choices.map((choice: RawNode) => ({
      text: new Text(choice.text),
      select_endpoint: choice.selectServiceEndpoint ? new NavigationEndpoint(choice.selectServiceEndpoint) : null,
      deselect_endpoint: choice.deselectServiceEndpoint ? new NavigationEndpoint(choice.deselectServiceEndpoint) : null,
      vote_ratio_if_selected: choice?.voteRatioIfSelected || null,
      vote_percentage_if_selected: new Text(choice.votePercentageIfSelected),
      vote_ratio_if_not_selected: choice?.voteRatioIfSelected || null,
      vote_percentage_if_not_selected: new Text(choice.votePercentageIfSelected),
      image: choice.image ? Thumbnail.fromResponse(choice.image) : null
    }));

    if (Reflect.has(data, 'type'))
      this.poll_type = data.type;

    if (Reflect.has(data, 'totalVotes'))
      this.total_votes = new Text(data.totalVotes);

    if (Reflect.has(data, 'liveChatPollId'))
      this.live_chat_poll_id = data.liveChatPollId;
  }
}