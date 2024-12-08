import { YTNode } from '../../helpers.js';
import Text from '../misc/Text.js';
import { Parser, type RawNode } from '../../index.js';

export default class MobileTopbar extends YTNode {
  static type = 'MobileTopbar';

  public placeholder_text: Text;
  public buttons;
  public logo_type?: string;

  constructor(data: RawNode) {
    super();
    this.placeholder_text = new Text(data.placeholderText);
    this.buttons = Parser.parseArray(data.buttons);

    if (Reflect.has(data, 'logo') && Reflect.has(data.logo, 'iconType'))
      this.logo_type = data.logo.iconType;
  }
}