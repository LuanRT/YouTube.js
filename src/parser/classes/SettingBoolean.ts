import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class SettingBoolean extends YTNode {
  static type = 'SettingBoolean';

  title?: Text;
  summary?: Text;
  enable_endpoint?: NavigationEndpoint;
  disable_endpoint?: NavigationEndpoint;
  item_id: string;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'title')) {
      this.title = new Text(data.title);
    }

    if (Reflect.has(data, 'summary')) {
      this.summary = new Text(data.summary);
    }

    if (Reflect.has(data, 'enableServiceEndpoint')) {
      this.enable_endpoint = new NavigationEndpoint(data.enableServiceEndpoint);
    }

    if (Reflect.has(data, 'disableServiceEndpoint')) {
      this.disable_endpoint = new NavigationEndpoint(data.disableServiceEndpoint);
    }

    this.item_id = data.itemId;
  }
}