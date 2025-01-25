import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ToggleButtonView from './ToggleButtonView.js';

export default class ThumbnailHoverOverlayToggleActionsView extends YTNode {
  static type = 'ThumbnailHoverOverlayToggleActionsView';

  public buttons: ObservedArray<ToggleButtonView>;

  constructor(data: RawNode) {
    super();
    this.buttons = Parser.parseArray(data.buttons, ToggleButtonView);
  }
}