import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class ChipCloudChip extends YTNode {
  static type = 'ChipCloudChip';
  constructor(data) {
    super();
    // TODO: is this isSelected or just selected
    this.is_selected = data.isSelected;
    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : undefined;
    this.text = new Text(data.text).toString();
  }
}
export default ChipCloudChip;
