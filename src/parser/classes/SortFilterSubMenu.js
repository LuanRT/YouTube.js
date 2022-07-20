import { observe } from '../helpers';
import { YTNode } from '../helpers';

class SortFilterSubMenu extends YTNode {
  static type = 'SortFilterSubMenu';
  constructor(data) {
    super();
    this.sub_menu_items = observe(data.subMenuItems.map((item) => ({
      title: item.title,
      selected: item.selected,
      continuation: item.continuation?.reloadContinuationData.continuation,
      subtitle: item.subtitle
    })));
    this.label = data.accessibility.accessibilityData.label;
  }
}
export default SortFilterSubMenu;
