import { Parser } from '../../index.js';
import Button from '../Button.js';
import KidsCategoryTab from './KidsCategoryTab.js';
import { type ObservedArray, YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class KidsCategoriesHeader extends YTNode {
  static type = 'kidsCategoriesHeader';

  category_tabs: ObservedArray<KidsCategoryTab>;
  privacy_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.category_tabs = Parser.parseArray(data.categoryTabs, KidsCategoryTab);
    this.privacy_button = Parser.parseItem(data.privacyButtonRenderer, Button);
  }
}