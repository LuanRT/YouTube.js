import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import { type ObservedArray } from '../helpers.ts';
import Text from './misc/Text.ts';
import Form from './Form.ts';
import Button from './Button.ts';

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