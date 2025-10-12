import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import { type ObservedArray } from '../helpers.js';
import Text from './misc/Text.js';
import Form from './Form.js';
import Button from './Button.js';

export default class FormPopup extends YTNode {
  static type = 'FormPopup';

  title: Text;
  form: Form | null;
  buttons: ObservedArray<Button>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.form = Parser.parseItem(data.form, Form);
    this.buttons = Parser.parseArray(data.buttons, Button);
  }
}