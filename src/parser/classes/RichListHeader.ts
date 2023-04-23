import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class RichListHeader extends YTNode {
  static type = 'RichListHeader';

  title: Text;
  subtitle: Text;
  title_style?: string;
  icon_type?: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);

    if (Reflect.has(data, 'titleStyle')) {
      this.title_style = data.titleStyle.style;
    }

    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon.iconType;
    }
  }
}