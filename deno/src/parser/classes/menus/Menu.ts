import { Parser } from '../../index.ts';
import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import Button from '../Button.ts';
import ButtonView from '../ButtonView.ts';
import SegmentedLikeDislikeButtonView from '../SegmentedLikeDislikeButtonView.ts';

export default class Menu extends YTNode {
  static type = 'Menu';

  items: ObservedArray<YTNode>;
  top_level_buttons: ObservedArray<Button | ButtonView | SegmentedLikeDislikeButtonView>;
  label?: string;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
    this.top_level_buttons = Parser.parseArray(data.topLevelButtons, [ Button, ButtonView, SegmentedLikeDislikeButtonView ]);

    if (Reflect.has(data, 'accessibility') && Reflect.has(data.accessibility, 'accessibilityData')) {
      this.label = data.accessibility.accessibilityData.label;
    }
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}