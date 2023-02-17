import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class TitleAndButtonListHeader extends YTNode {
  static type = 'TitleAndButtonListHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default TitleAndButtonListHeader;