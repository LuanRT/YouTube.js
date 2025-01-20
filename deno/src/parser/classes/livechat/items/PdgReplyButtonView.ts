import { YTNode } from '../../../helpers.ts';
import { Parser, type RawNode } from '../../../index.ts';
import ButtonView from '../../ButtonView.ts';
import Text from '../../misc/Text.ts';

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