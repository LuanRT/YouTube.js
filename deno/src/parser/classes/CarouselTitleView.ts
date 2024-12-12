import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ButtonView from './ButtonView.ts';

export default class CarouselTitleView extends YTNode {
  static type = 'CarouselTitleView';

  title: string;
  previous_button: ButtonView | null;
  next_button: ButtonView | null;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.previous_button = Parser.parseItem(data.previousButton, ButtonView);
    this.next_button = Parser.parseItem(data.nextButton, ButtonView);
  }
}