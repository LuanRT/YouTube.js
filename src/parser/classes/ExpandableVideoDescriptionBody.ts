import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class ExpandableVideoDescriptionBody extends YTNode {
  static type = 'ExpandableVideoDescriptionBody';

  show_more_text: String;
  show_less_text: String;
  attributed_description_body_text: {
    content: String
  };

  constructor(data: RawNode) {
    super();
    this.show_more_text = data.showMoreText.simpleText;
    this.show_less_text = data.showLessText.simpleText;
    this.attributed_description_body_text = {
      content: data.attributedDescriptionBodyText.content
    };
  }
}
