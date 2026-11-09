import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import TicketEvent from './TicketEvent.js';

export default class TicketShelf extends YTNode {
  static type = 'TicketShelf';

  title: string;
  events: ObservedArray<TicketEvent>;
  information_text: string;
  use_calendar_avatar: boolean;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.events = Parser.parseArray(data.events, TicketEvent);
    this.information_text = data.informationText;
    this.use_calendar_avatar = data.useCalendarAvatar;
  }
}