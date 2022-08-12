import { YTNode } from '../helpers';
import Text from './misc/Text';

class DropdownItem extends YTNode {
  static type = 'DropdownItem';

  label: string;
  selected: boolean;
  value: number;
  iconType?: string;

  constructor(data: any) {
    super();

    this.label = new Text(data.label).toString();
    this.selected = !!data.isSelected;
    this.value = data.int32Value;

    if (data.icon?.iconType) {
      this.iconType = data.icon?.iconType;
    }
  }
}

export default DropdownItem;