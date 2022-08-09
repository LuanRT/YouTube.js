import { observe, YTNode } from '../helpers';

class SortFilterSubMenu extends YTNode {
  static type = 'SortFilterSubMenu';
  
  sub_menu_items: {
    title: string;
    selected: boolean;
    continuation: string;
    subtitle: string;
  }[];
  
  label: string;
  
  constructor(data: any) {
    super();
    
    this.sub_menu_items = data.subMenuItems.map((item: any) => ({
      title: item.title,
      selected: item.selected,
      continuation: item.continuation?.reloadContinuationData.continuation,
      subtitle: item.subtitle
    }));

    this.label = data.accessibility.accessibilityData.label;
  }
}

export default SortFilterSubMenu;