import { YTNode } from '../helpers';
import NavigationEndpoint from './NavigationEndpoint';

class SortFilterSubMenu extends YTNode {
  static type = 'SortFilterSubMenu';

  title?: string;
  icon_type?: string;
  label?: string;
  tooltip?: string;

  sub_menu_items?: {
    title: string;
    selected: boolean;
    continuation: string;
    endpoint: NavigationEndpoint;
    subtitle: string | null;
  }[];

  constructor(data: any) {
    super();

    if (data.title) {
      this.title = data.title;
    }

    if (data.icon?.iconType) {
      this.icon_type = data.icon.iconType;
    }

    if (data.accessibility?.accessibilityData?.label) {
      this.label = data.accessibility.accessibilityData.label;
    }

    if (data.tooltip) {
      this.tooltip = data.tooltip;
    }

    if (data.subMenuItems) {
      this.sub_menu_items = data.subMenuItems.map((item: any) => ({
        title: item.title,
        selected: item.selected,
        continuation: item.continuation?.reloadContinuationData?.continuation,
        endpoint: new NavigationEndpoint(item.serviceEndpoint),
        subtitle: item.subtitle || null
      }));
    }
  }
}

export default SortFilterSubMenu;