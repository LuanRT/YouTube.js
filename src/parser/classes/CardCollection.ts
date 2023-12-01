import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class CardCollection extends YTNode {
  static type = 'CardCollection';

  cards: ObservedArray<YTNode>;
  header: Text;
  allow_teaser_dismiss: boolean;

  constructor(data: RawNode) {
    super();
    this.cards = Parser.parseArray(data.cards);
    this.header = new Text(data.headerText);
    this.allow_teaser_dismiss = data.allowTeaserDismiss;
  }
}