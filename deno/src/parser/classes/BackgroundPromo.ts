import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Button from './Button.ts';
import ButtonView from './ButtonView.ts';

export default class BackgroundPromo extends YTNode {
  static type = 'BackgroundPromo';

  public body_text?: Text;
  public cta_button?: Button | ButtonView | null;
  public icon_type?: string;
  public title?: Text;
  
  constructor(data: RawNode) {
    super();
    this.body_text = new Text(data.bodyText);
    this.cta_button = Parser.parseItem(data.ctaButton, [ Button, ButtonView ]);
    
    if (Reflect.has(data, 'icon'))
      this.icon_type = data.icon.iconType;
    
    this.title = new Text(data.title);
  }
}