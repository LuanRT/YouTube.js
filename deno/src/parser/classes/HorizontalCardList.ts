import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import SearchRefinementCard from './SearchRefinementCard.ts';
import Button from './Button.ts';
import MacroMarkersListItem from './MacroMarkersListItem.ts';
import GameCard from './GameCard.ts';
import VideoCard from './VideoCard.ts';

class HorizontalCardList extends YTNode {
  static type = 'HorizontalCardList';

  cards;
  header;
  previous_button;
  next_button;

  constructor(data: any) {
    super();
    this.cards = Parser.parseArray(data.cards, [ SearchRefinementCard, MacroMarkersListItem, GameCard, VideoCard ]);
    this.header = Parser.parseItem(data.header);
    this.previous_button = Parser.parseItem(data.previousButton, Button);
    this.next_button = Parser.parseItem(data.nextButton, Button);
  }
}

export default HorizontalCardList;