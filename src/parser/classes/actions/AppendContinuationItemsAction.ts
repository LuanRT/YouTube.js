import Parser from '../../index';
import { YTNode } from '../../helpers';

class AppendContinuationItemsAction extends YTNode {
  static type = 'AppendContinuationItemsAction';

  items;
  target: string;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.continuationItems);
    this.target = data.target;
  }
}

export default AppendContinuationItemsAction;