import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ButtonView from './ButtonView.js';
import SectionHeaderView from './SectionHeaderView.js';
import ShortsLockupView from './ShortsLockupView.js';

export default class GridShelfView extends YTNode {
  static type = 'GridShelfView';
  
  contents: ObservedArray<ShortsLockupView> | null;
  header: SectionHeaderView | null;
  content_aspect_ratio: string;
  enable_vertical_expansion: boolean;
  show_more_button: ButtonView | null;
  show_less_button: ButtonView | null;
  min_collapsed_item_count: number;
  logging_directives?: {
      tracking_params: string,
      visibility: {
        types: string
      }
    };
  
  constructor(data: RawNode) {
    super();
    this.contents = Parser.parse(data.contents, true, ShortsLockupView);
    this.header = Parser.parseItem(data.header, SectionHeaderView);
    this.content_aspect_ratio = data.contentAspectRatio;
    this.enable_vertical_expansion = data.enableVerticalExpansion;
    this.show_more_button = Parser.parseItem(data.showMoreButton, ButtonView);
    this.show_less_button = Parser.parseItem(data.showLessButton, ButtonView);
    this.min_collapsed_item_count = data.minCollapsedItemCount;
    
    if (Reflect.has(data, 'loggingDirectives')) {
      this.logging_directives = data.loggingDirectives;
    }
  }
}
