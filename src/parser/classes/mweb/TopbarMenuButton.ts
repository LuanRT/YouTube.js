import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class TopbarMenuButton extends YTNode {
  static type = 'TopbarMenuButton';

  public icon_type?: string;
  public menu_renderer: YTNode | null;
  public target_id: string;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType'))
      this.icon_type = data.icon.iconType;
    this.menu_renderer = Parser.parseItem(data.menuRenderer);
    this.target_id = data.targetId;
  }
}