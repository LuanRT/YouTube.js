import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { YTNodes, Parser } from '../index.js';
import type { RawNode } from '../types/RawResponse.js';

export default class GridShelfView extends YTNode {
  static type = 'GridShelfView';
  
  contents: ObservedArray<YTNodes.ShortsLockupView> | null;
  header: YTNodes.SectionHeaderView | null;
  content_aspect_ratio: string;
  enable_vertical_expansion: boolean;
  show_more_button: YTNodes.ButtonView | null;
  show_less_button: YTNodes.ButtonView | null;
  min_collapsed_item_count: number;
  logging_directives: {
      tracking_params: string,
      visibility: {
        types: string
      }
    };
  
  constructor(data: RawNode) {
    super();
    this.contents = Parser.parse(data.contents, true, YTNodes.ShortsLockupView);
    this.header = Parser.parseItem(data.header, YTNodes.SectionHeaderView);
    this.content_aspect_ratio = data.contentAspectRatio;
    this.enable_vertical_expansion = data.enableVerticalExpansion;
    this.show_more_button = Parser.parseItem(data.showMoreButton, YTNodes.ButtonView);
    this.show_less_button = Parser.parseItem(data.showLessButton, YTNodes.ButtonView);
    this.min_collapsed_item_count = data.minCollapsedItemCount;
  }
}
