import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import TicketEvent from './TicketEvent.ts';

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