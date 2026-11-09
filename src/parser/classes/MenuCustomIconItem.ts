import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class MenuCustomIconItem extends YTNode {
  static type = 'MenuCustomIconItem';

  public action_text: Text;
  public command?: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.action_text = new Text(data.actionText);
    if ('command' in data)
      this.command = new NavigationEndpoint(data.command);
  }
}