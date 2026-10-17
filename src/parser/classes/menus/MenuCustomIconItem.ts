import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import Text from '../misc/Text.js';

export default class MenuCustomIconItem extends YTNode {
  static type = 'MenuCustomIconItem';

  public action_text: Text;
  public endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.action_text = new Text(data.actionText);
    this.endpoint = new NavigationEndpoint(data.command);
  }
}