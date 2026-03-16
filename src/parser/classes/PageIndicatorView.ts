import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class PageIndicatorView extends YTNode {
  static type = 'PageIndicatorView';

  public indicator_count: number;
  public selected_index: number;

  constructor(data: RawNode) {
    super();
    this.indicator_count = data.indicatorCount ?? 0;
    this.selected_index = data.selectedIndex ?? 0;
  }
}
