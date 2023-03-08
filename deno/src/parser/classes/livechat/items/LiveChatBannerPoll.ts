import { YTNode } from '../../../helpers.ts';
import Parser from '../../../index.ts';
import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';
import type { RawNode } from '../../../index.ts';
class LiveChatBannerPoll extends YTNode {
  static type = 'LiveChatBannerPoll';

  poll_question: Text;
  author_photo: Thumbnail[];
  choices: {
    option_id: string;
    text: string;
  }[];

  collapsed_state_entity_key: string;
  live_chat_poll_state_entity_key: string;
  context_menu_button;

  constructor(data: RawNode) {
    super();
    this.poll_question = new Text(data.pollQuestion);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);

    this.choices = data.pollChoices.map((choice: any) => ({
      option_id: choice.pollOptionId,
      text: new Text(choice.text).toString()
    }));

    this.collapsed_state_entity_key = data.collapsedStateEntityKey;
    this.live_chat_poll_state_entity_key = data.liveChatPollStateEntityKey;
    this.context_menu_button = Parser.parseItem(data.contextMenuButton);
  }
}

export default LiveChatBannerPoll;