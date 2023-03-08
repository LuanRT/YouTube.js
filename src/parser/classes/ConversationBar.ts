import { YTNode } from '../helpers.js';
import Parser, { RawNode } from '../index.js';
import Message from './Message.js';

class ConversationBar extends YTNode {
  static type = 'ConversationBar';

  availability_message: Message | null;

  constructor(data: RawNode) {
    super();
    this.availability_message = Parser.parseItem<Message>(data.availabilityMessage, Message);
  }
}

export default ConversationBar;