import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ChipCloudChip extends YTNode {
  static type = 'ChipCloudChip';

  is_selected: boolean;
  endpoint?: NavigationEndpoint;
  text: string;

  constructor(data: RawNode) {
    super();
    this.is_selected = data.isSelected;
    if (Reflect.has(data, 'navigationEndpoint')) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
    this.text = new Text(data.text).toString();
  }
}