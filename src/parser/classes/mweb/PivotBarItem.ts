import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import AccessibilityData, { type AccessibilitySupportedDatas } from '../misc/AccessibilityData.js';

export default class PivotBarItem extends YTNode {
  static type = 'PivotBarItem';

  public pivot_identifier: string;
  public endpoint: NavigationEndpoint;
  public title: Text;
  public accessibility_label?: string;
  public icon_type?: string;
  public accessibility?: AccessibilitySupportedDatas;

  constructor(data: RawNode) {
    super();
    this.pivot_identifier = data.pivotIdentifier;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.title = new Text(data.title);

    if ('accessibility' in data
      && 'accessibilityData' in data.accessibility) {
      this.accessibility = {
        accessibility_data: new AccessibilityData(data.accessibility.accessibilityData)
      };
    }
    
    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType'))
      this.icon_type = data.icon.iconType;
  }
  
  get label() {
    return this.accessibility?.accessibility_data?.label;
  }
}