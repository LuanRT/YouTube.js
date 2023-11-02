import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Message from './Message.js';

export default class ConversationBar extends YTNode {
  static type = 'ConversationBar';

  availability_message: Message | null;

  constructor(data: RawNode) {
    super();
    this.availability_message = Parser.parseItem(data.availabilityMessage, Message);
  }
}