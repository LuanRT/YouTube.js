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

export default class Menu extends YTNode {
  static type = 'Menu';

  public items: ObservedArray<YTNode>;
  public flexible_items: ObservedArray<MenuFlexibleItem>;
  public top_level_buttons: ObservedArray<ToggleButton | LikeButton | Button |ButtonView | SegmentedLikeDislikeButtonView>;
  public label?: string;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
    this.flexible_items = Parser.parseArray(data.flexibleItems, MenuFlexibleItem);
    this.top_level_buttons = Parser.parseArray(data.topLevelButtons, [ ToggleButton, LikeButton, Button, ButtonView, SegmentedLikeDislikeButtonView ]);

    if (Reflect.has(data, 'accessibility') && Reflect.has(data.accessibility, 'accessibilityData')) {
      this.label = data.accessibility.accessibilityData.label;
    }
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}