import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import Text from '../misc/Text.ts';
import { Parser, type RawNode } from '../../index.ts';

export default class MobileTopbar extends YTNode {
  static type = 'MobileTopbar';

  public placeholder_text: Text;
  public buttons: ObservedArray<YTNode>;
  public logo_type?: string;

  constructor(data: RawNode) {
    super();
    this.placeholder_text = new Text(data.placeholderText);
    this.buttons = Parser.parseArray(data.buttons);

    if (Reflect.has(data, 'logo') && Reflect.has(data.logo, 'iconType'))
      this.logo_type = data.logo.iconType;
  }
}