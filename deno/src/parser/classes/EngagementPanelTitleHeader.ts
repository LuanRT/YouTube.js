import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Button from './Button.ts';

export default class EngagementPanelTitleHeader extends YTNode {
  static type = 'EngagementPanelTitleHeader';

  public title: Text;
  public visibility_button: Button | null;
  public contextual_info?: Text;
  public menu: YTNode | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.contextual_info = data.contextualInfo ? new Text(data.contextualInfo) : undefined;
    this.visibility_button = Parser.parseItem(data.visibilityButton, Button);
    this.menu = Parser.parseItem(data.menu);
  }
}