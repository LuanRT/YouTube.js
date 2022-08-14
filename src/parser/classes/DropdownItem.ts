import { YTNode } from '../helpers';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';

class DropdownItem extends YTNode {
  static type = 'DropdownItem';

  label: string;
  selected: boolean;
  value?: number | string;
  iconType?: string;
  description?: string;
  endpoint?: NavigationEndpoint;

  constructor(data: any) {
    super();

    this.label = new Text(data.label).toString();
    this.selected = !!data.isSelected;

    if (data.int32Value) {
      this.value = data.int32Value;
    }
    else if (data.stringValue) {
      this.value = data.stringValue;
    }

    if (data.onSelectCommand?.browseEndpoint) {
      this.endpoint = new NavigationEndpoint(data.onSelectCommand);
    }

    if (data.icon?.iconType) {
      this.iconType = data.icon?.iconType;
    }

    if (data.descriptionText) {
      this.description = new Text(data.descriptionText).toString();
    }
  }
}

export default DropdownItem;