import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class SortFilterSubMenu extends YTNode {
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

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'title')) {
      this.title = data.title;
    }

    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon.iconType;
    }

    if (Reflect.has(data, 'accessibility')) {
      this.label = data.accessibility.accessibilityData.label;
    }

    if (Reflect.has(data, 'tooltip')) {
      this.tooltip = data.tooltip;
    }

    if (Reflect.has(data, 'subMenuItems')) {
      this.sub_menu_items = data.subMenuItems.map((item: RawNode) => ({
        title: item.title,
        selected: item.selected,
        continuation: item.continuation?.reloadContinuationData?.continuation,
        endpoint: new NavigationEndpoint(item.serviceEndpoint || item.navigationEndpoint),
        subtitle: item.subtitle || null
      }));
    }
  }
}