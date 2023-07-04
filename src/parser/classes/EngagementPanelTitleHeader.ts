import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';

export default class EngagementPanelTitleHeader extends YTNode {
  static type = 'EngagementPanelTitleHeader';

  title: Text;
  visibility_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.visibility_button = Parser.parseItem(data.visibilityButton, Button);
  }
}