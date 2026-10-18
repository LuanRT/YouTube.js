import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

export default class ConfirmDialog extends YTNode {
  static type = 'ConfirmDialog';

  public title: Text;
  public confirm_endpoint?: NavigationEndpoint;
  public confirm_button: Button | null;
  public cancel_button: Button | null;
  public dialog_messages: Text[];
  public primary_is_cancel: boolean;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    
    if ('confirmEndpoint' in data)
      this.confirm_endpoint = new NavigationEndpoint(data.confirmEndpoint);

    this.confirm_button = Parser.parseItem(data.confirmButton, Button);
    this.cancel_button = Parser.parseItem(data.cancelButton, Button);
    this.dialog_messages = data.dialogMessages.map((txt: RawNode) => new Text(txt));
    this.primary_is_cancel = !!data.primaryIsCancel;
  }
}