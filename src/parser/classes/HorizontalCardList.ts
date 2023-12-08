import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import SearchRefinementCard from './SearchRefinementCard.js';
import Button from './Button.js';
import MacroMarkersListItem from './MacroMarkersListItem.js';
import GameCard from './GameCard.js';
import VideoCard from './VideoCard.js';
import VideoAttributeView from './VideoAttributeView.js';

export default class HorizontalCardList extends YTNode {
  static type = 'HorizontalCardList';

  cards: ObservedArray<VideoAttributeView | SearchRefinementCard | MacroMarkersListItem | GameCard | VideoCard>;
  header: YTNode;
  previous_button: Button | null;
  next_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.cards = Parser.parseArray(data.cards, [ VideoAttributeView, SearchRefinementCard, MacroMarkersListItem, GameCard, VideoCard ]);
    this.header = Parser.parseItem(data.header);
    this.previous_button = Parser.parseItem(data.previousButton, Button);
    this.next_button = Parser.parseItem(data.nextButton, Button);
  }
}