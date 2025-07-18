import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ButtonView from './ButtonView.js';

export default class GridShelfView extends YTNode {
  static type = 'GridShelfView';

  public contents: ObservedArray<YTNode>;
  public header: YTNode | null;
  public content_aspect_ratio: string;
  public enable_vertical_expansion: boolean;
  public show_more_button: ButtonView | null;
  public show_less_button: ButtonView | null;
  public min_collapsed_item_count: number;
  
  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
    this.header = Parser.parseItem(data.header);
    this.content_aspect_ratio = data.contentAspectRatio;
    this.enable_vertical_expansion = data.enableVerticalExpansion;
    this.show_more_button = Parser.parseItem(data.showMoreButton, ButtonView);
    this.show_less_button = Parser.parseItem(data.showLessButton, ButtonView);
    this.min_collapsed_item_count = data.minCollapsedItemCount;
  }
}
