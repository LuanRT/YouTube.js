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