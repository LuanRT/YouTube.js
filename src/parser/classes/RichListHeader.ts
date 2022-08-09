import Text from './misc/Text';
import { YTNode } from '../helpers';

class RichListHeader extends YTNode {
  static type = 'RichListHeader';

  title: Text;
  icon_type: string;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.icon_type = data.icon.iconType;
  }
}

export default RichListHeader;