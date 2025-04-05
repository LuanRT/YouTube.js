import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import AccessibilityData, { type AccessibilitySupportedDatas } from './misc/AccessibilityData.js';

export interface SubMenuItem {
  title: string;
  selected: boolean;
  continuation: string;
  endpoint: NavigationEndpoint;
  subtitle: string | null;
}

export default class SortFilterSubMenu extends YTNode {
  static type = 'SortFilterSubMenu';

  public title?: string;
  public icon_type?: string;
  public tooltip?: string;
  public sub_menu_items?: SubMenuItem[];
  public accessibility?: AccessibilitySupportedDatas;

  constructor(data: RawNode) {
    super();
    if ('title' in data) {
      this.title = data.title;
    }

    if ('icon' in data) {
      this.icon_type = data.icon.iconType;
    }

    if ('tooltip' in data) {
      this.tooltip = data.tooltip;
    }

    if ('subMenuItems' in data) {
      this.sub_menu_items = data.subMenuItems.map((item: RawNode) => ({
        title: item.title,
        selected: item.selected,
        continuation: item.continuation?.reloadContinuationData?.continuation,
        endpoint: new NavigationEndpoint(item.serviceEndpoint || item.navigationEndpoint),
        subtitle: item.subtitle || null
      }));
    }

    if ('accessibility' in data
      && 'accessibilityData' in data.accessibility) {
      this.accessibility = {
        accessibility_data: new AccessibilityData(data.accessibility.accessibilityData)
      };
    }
  }
  
  get label(): string | undefined {
    return this.accessibility?.accessibility_data?.label;
  }
}