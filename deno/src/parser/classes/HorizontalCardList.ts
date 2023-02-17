import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import SearchRefinementCard from './SearchRefinementCard.ts';
import Button from './Button.ts';
import MacroMarkersListItem from './MacroMarkersListItem.ts';

class HorizontalCardList extends YTNode {
  static type = 'HorizontalCardList';

  cards;
  header;
  previous_button;
  next_button;

  constructor(data: any) {
    super();
    this.cards = Parser.parseArray<SearchRefinementCard | MacroMarkersListItem>(data.cards);
    this.header = Parser.parseItem(data.header);
    this.previous_button = Parser.parseItem<Button>(data.previousButton, Button);
    this.next_button = Parser.parseItem<Button>(data.nextButton, Button);
  }
}

export default HorizontalCardList;