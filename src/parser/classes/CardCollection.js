import Parser from '../index';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class CardCollection extends YTNode {
  static type = 'CardCollection';

  constructor(data) {
    super();
    this.cards = Parser.parse(data.cards);
    this.header = new Text(data.headerText);
    this.allow_teaser_dismiss = data.allowTeaserDismiss;
  }
}

export default CardCollection;