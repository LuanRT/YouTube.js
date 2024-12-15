import { YTNode } from '../../../helpers.js';
import { Parser, type RawNode } from '../../../index.js';
import ButtonView from '../../ButtonView.js';
import Text from '../../misc/Text.js';

export default class PdgReplyButtonView extends YTNode {
  static type = 'PdgReplyButtonView';

  reply_button: ButtonView | null;
  reply_count_entity_key: string;
  reply_count_placeholder: Text;

  constructor(data: RawNode) {
    super();
    this.reply_button = Parser.parseItem(data.replyButton, ButtonView);
    this.reply_count_entity_key = data.replyCountEntityKey;
    this.reply_count_placeholder = Text.fromAttributed(data.replyCountPlaceholder);
  }
}