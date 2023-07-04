import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Button from './Button.ts';

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