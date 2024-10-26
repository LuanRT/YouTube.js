import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';

export default class CopyLink extends YTNode {
  static type = 'CopyLink';

  public copy_button: Button | null;
  public short_url: string;
  public style: string;

  constructor(data: RawNode) {
    super();
    this.copy_button = Parser.parseItem(data.copyButton, Button);
    this.short_url = data.shortUrl;
    this.style = data.style;
  }
}