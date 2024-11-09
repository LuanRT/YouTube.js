import { YTNode } from '../helpers.js';
import { Text } from '../misc.js';

import type { RawNode } from '../index.js';

export default class ExpandableVideoDescriptionBody extends YTNode {
  static type = 'ExpandableVideoDescriptionBody';

  show_more_text: Text;
  show_less_text: Text;
  attributed_description_body_text?: Text;

  constructor(data: RawNode) {
    super();
    this.show_more_text = new Text(data.showMoreText);
    this.show_less_text = new Text(data.showLessText);
    if (Reflect.has(data, 'attributedDescriptionBodyText')) {
      this.attributed_description_body_text = Text.fromAttributed(data.attributedDescriptionBodyText);
    }
  }
}
