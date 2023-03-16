import { YTNode } from '../helpers.ts';
import Parser, { RawNode } from '../index.ts';
import Message from './Message.ts';

class ConversationBar extends YTNode {
  static type = 'ConversationBar';

  availability_message: Message | null;

  constructor(data: RawNode) {
    super();
    this.availability_message = Parser.parseItem(data.availabilityMessage, Message);
  }
}

export default ConversationBar;