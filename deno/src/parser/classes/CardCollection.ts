import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Text from './misc/Text.ts';

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