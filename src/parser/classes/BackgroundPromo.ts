import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import ButtonView from './ButtonView.js';

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