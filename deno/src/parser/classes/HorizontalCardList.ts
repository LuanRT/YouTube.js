import Parser, { type RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';
import SearchRefinementCard from './SearchRefinementCard.ts';
import Button from './Button.ts';
import MacroMarkersListItem from './MacroMarkersListItem.ts';
import GameCard from './GameCard.ts';
import VideoCard from './VideoCard.ts';

export default class HorizontalCardList extends YTNode {
  static type = 'HorizontalCardList';

  cards: ObservedArray<SearchRefinementCard | MacroMarkersListItem | GameCard | VideoCard>;
  header: YTNode;
  previous_button: Button | null;
  next_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.cards = Parser.parseArray(data.cards, [ SearchRefinementCard, MacroMarkersListItem, GameCard, VideoCard ]);
    this.header = Parser.parseItem(data.header);
    this.previous_button = Parser.parseItem(data.previousButton, Button);
    this.next_button = Parser.parseItem(data.nextButton, Button);
  }
}