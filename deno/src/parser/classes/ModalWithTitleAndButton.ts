import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Button from './Button.ts';
import Text from './misc/Text.ts';

export default class ModalWithTitleAndButton extends YTNode {
  static type = 'ModalWithTitleAndButton';

  title: Text;
  content: Text;
  button: Button | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.content = new Text(data.content);
    this.button = Parser.parseItem(data.button, Button);
  }
}