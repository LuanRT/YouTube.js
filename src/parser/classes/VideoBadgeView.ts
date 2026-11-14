import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class VideoBadgeView extends YTNode {
  static type = 'VideoBadgeView';

  label: string;
  icon_name: string;
  may_truncate_text: boolean;

  constructor(data: RawNode) {
    super();
    this.label = data.label;
    this.icon_name = data.iconName;
    this.may_truncate_text = data.mayTruncateText;
  }
}