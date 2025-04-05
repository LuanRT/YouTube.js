import { Parser } from '../../index.js';
import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import Button from '../Button.js';
import ButtonView from '../ButtonView.js';
import SegmentedLikeDislikeButtonView from '../SegmentedLikeDislikeButtonView.js';
import MenuFlexibleItem from './MenuFlexibleItem.js';
import LikeButton from '../LikeButton.js';
import ToggleButton from '../ToggleButton.js';
import FlexibleActionsView from '../FlexibleActionsView.js';
import AccessibilityData, { type AccessibilitySupportedDatas } from '../misc/AccessibilityData.js';

export default class Menu extends YTNode {
  static type = 'Menu';

  public items: ObservedArray<YTNode>;
  public flexible_items: ObservedArray<MenuFlexibleItem>;
  public top_level_buttons: ObservedArray<ToggleButton | LikeButton | Button |ButtonView | SegmentedLikeDislikeButtonView | FlexibleActionsView>;
  public accessibility?: AccessibilitySupportedDatas;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
    this.flexible_items = Parser.parseArray(data.flexibleItems, MenuFlexibleItem);
    this.top_level_buttons = Parser.parseArray(data.topLevelButtons, [ ToggleButton, LikeButton, Button, ButtonView, SegmentedLikeDislikeButtonView, FlexibleActionsView ]);

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

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}