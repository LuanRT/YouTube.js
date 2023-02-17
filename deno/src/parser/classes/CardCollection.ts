import Parser from '../index.ts';
import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class CardCollection extends YTNode {
  static type = 'CardCollection';

  cards;
  header: Text;
  allow_teaser_dismiss: boolean;

  constructor(data: any) {
    super();
    this.cards = Parser.parseArray(data.cards);
    this.header = new Text(data.headerText);
    this.allow_teaser_dismiss = data.allowTeaserDismiss;
  }
}

export default CardCollection;