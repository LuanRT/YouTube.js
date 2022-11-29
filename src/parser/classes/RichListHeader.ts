import Text from './misc/Text';
import { YTNode } from '../helpers';

export default class RichListHeader extends YTNode {
  static type = 'RichListHeader';

  title: Text;
  subtitle: Text;
  title_style: string | undefined;
  icon_type: string;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.title_style = data?.titleStyle?.style;
    this.icon_type = data?.icon?.iconType;
  }
}