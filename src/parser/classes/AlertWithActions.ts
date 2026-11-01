import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import Text from './misc/Text.js';

export default class AlertWithActions extends YTNode {
  static type = 'AlertWithActions';

  public title: Text;
  public alert_type?: string;
  public icon_type?: string;
  public action_buttons: ObservedArray<Button>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.alert_type = data.alertType?.type?.replace('ALERT_TYPE_', '');
    this.icon_type = data.icon?.iconType;
    this.action_buttons = Parser.parseArray(data.actionButtons, Button);
  }
}