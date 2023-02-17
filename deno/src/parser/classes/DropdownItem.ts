import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

class DropdownItem extends YTNode {
  static type = 'DropdownItem';

  label: string;
  selected: boolean;
  value?: number | string;
  icon_type?: string;
  description?: string;
  endpoint?: NavigationEndpoint;

  constructor(data: any) {
    super();

    this.label = new Text(data.label).toString();
    this.selected = !!data.isSelected;

    if (data.int32Value) {
      this.value = data.int32Value;
    } else if (data.stringValue) {
      this.value = data.stringValue;
    }

    if (data.onSelectCommand?.browseEndpoint) {
      this.endpoint = new NavigationEndpoint(data.onSelectCommand);
    }

    if (data.icon?.iconType) {
      this.icon_type = data.icon?.iconType;
    }

    if (data.descriptionText) {
      this.description = new Text(data.descriptionText).toString();
    }
  }
}

export default DropdownItem;