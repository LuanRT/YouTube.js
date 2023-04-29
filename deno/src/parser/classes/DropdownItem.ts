import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class DropdownItem extends YTNode {
  static type = 'DropdownItem';

  label: string;
  selected: boolean;
  value?: number | string;
  icon_type?: string;
  description?: Text;
  endpoint?: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label).toString();
    this.selected = !!data.isSelected;

    if (Reflect.has(data, 'int32Value')) {
      this.value = data.int32Value;
    } else if (data.stringValue) {
      this.value = data.stringValue;
    }

    if (Reflect.has(data, 'onSelectCommand')) {
      this.endpoint = new NavigationEndpoint(data.onSelectCommand);
    }

    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon?.iconType;
    }

    if (Reflect.has(data, 'descriptionText')) {
      this.description = new Text(data.descriptionText);
    }
  }
}