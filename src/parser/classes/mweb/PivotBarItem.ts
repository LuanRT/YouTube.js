import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import Text from '../misc/Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export default class PivotBarItem extends YTNode {
  static type = 'PivotBarItem';

  public pivot_identifier: string;
  public endpoint: NavigationEndpoint;
  public title: Text;
  public accessibility_label?: string;
  public icon_type?: string;

  constructor(data: RawNode) {
    super();
    this.pivot_identifier = data.pivotIdentifier;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.title = new Text(data.title);

    if (Reflect.has(data, 'accessibility') && Reflect.has(data.accessibility, 'accessibilityData'))
      this.accessibility_label = data.accessibility.accessibilityData.label;

    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType'))
      this.icon_type = data.icon.iconType;
  }
}