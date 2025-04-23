import { Parser } from '../../index.ts';
import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import Button from '../Button.ts';
import ButtonView from '../ButtonView.ts';
import SegmentedLikeDislikeButtonView from '../SegmentedLikeDislikeButtonView.ts';
import MenuFlexibleItem from './MenuFlexibleItem.ts';
import LikeButton from '../LikeButton.ts';
import ToggleButton from '../ToggleButton.ts';
import FlexibleActionsView from '../FlexibleActionsView.ts';
import AccessibilityData, { type AccessibilitySupportedDatas } from '../misc/AccessibilityData.ts';

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