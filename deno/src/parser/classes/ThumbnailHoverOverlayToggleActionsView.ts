import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ToggleButtonView from './ToggleButtonView.ts';

export default class ThumbnailHoverOverlayToggleActionsView extends YTNode {
  static type = 'ThumbnailHoverOverlayToggleActionsView';

  public buttons: ObservedArray<ToggleButtonView>;

  constructor(data: RawNode) {
    super();
    this.buttons = Parser.parseArray(data.buttons, ToggleButtonView);
  }
}