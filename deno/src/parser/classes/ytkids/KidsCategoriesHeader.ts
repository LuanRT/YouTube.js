import Parser from '../../index.ts';
import Button from '../Button.ts';
import KidsCategoryTab from './KidsCategoryTab.ts';
import { type ObservedArray, YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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