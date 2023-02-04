import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

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