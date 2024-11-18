import { YTNode } from '../../../helpers.js';
import { Parser, type RawNode } from '../../../index.js';
import Text from '../../misc/Text.js';
import ToggleButtonView from '../../ToggleButtonView.js';

export default class LiveChatBannerChatSummary extends YTNode {
  static type = 'LiveChatBannerChatSummary';

  id: string;
  chat_summary: Text;
  icon_type: string;
  like_feedback_button: ToggleButtonView | null;
  dislike_feedback_button: ToggleButtonView | null;

  constructor(data: RawNode) {
    super();
    this.id = data.liveChatSummaryId;
    this.chat_summary = new Text(data.chatSummary);
    this.icon_type = data.icon.iconType;
    this.like_feedback_button = Parser.parseItem(data.likeFeedbackButton, ToggleButtonView);
    this.dislike_feedback_button = Parser.parseItem(data.dislikeFeedbackButton, ToggleButtonView);
  }
}
