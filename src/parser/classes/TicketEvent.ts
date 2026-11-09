import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class TicketEvent extends YTNode {
  static type = 'TicketEvent';

  title: string;
  time_month: string;
  time_day: string;
  link_text: string;
  button_text: string;
  endpoint: NavigationEndpoint;
  subtitle1: string;
  subtitle2: string;
  time_date: string;
  time_time: string;
  time_weekday: string;
  button_accessibility_text: string;
  has_multiple_offers: boolean;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.time_month = data.timeMonth;
    this.time_day = data.timeDay;
    this.link_text = data.linkText;
    this.button_text = data.buttonText;
    this.endpoint = new NavigationEndpoint(data.buttonCommand);
    this.subtitle1 = data.subtitle1;
    this.subtitle2 = data.subtitle2;
    this.time_date = data.timeDate;
    this.time_time = data.timeTime;
    this.time_weekday = data.timeWeekday;
    this.button_accessibility_text = data.buttonAccessibilityText;
    this.has_multiple_offers = data.hasMultipleOffers;
  }
}