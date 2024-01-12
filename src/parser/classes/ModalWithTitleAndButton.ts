import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import Text from './misc/Text.js';

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