import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class ChipView extends YTNode {
  static type = 'ChipView';

  text: string;
  display_type: string;
  endpoint: NavigationEndpoint;
  chip_entity_key: string;

  constructor(data: RawNode) {
    super();
    this.text = data.text;
    this.display_type = data.displayType;
    this.endpoint = new NavigationEndpoint(data.tapCommand);
    this.chip_entity_key = data.chipEntityKey;
  }
}