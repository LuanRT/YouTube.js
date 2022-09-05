import Parser from '../index';
import Text from './misc/Text';
import { YTNode } from '../helpers';

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