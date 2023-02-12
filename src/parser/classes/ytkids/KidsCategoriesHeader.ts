import Parser from '../../index.js';
import type Button from '../Button.js';
import type KidsCategoryTab from './KidsCategoryTab.js';
import { YTNode } from '../../helpers.js';

class KidsCategoriesHeader extends YTNode {
  static type = 'kidsCategoriesHeader';

  category_tabs: KidsCategoryTab[];
  privacy_button: Button | null;

  constructor(data: any) {
    super();
    this.category_tabs = Parser.parseArray<KidsCategoryTab>(data.categoryTabs);
    this.privacy_button = Parser.parseItem<Button>(data.privacyButtonRenderer);
  }
}

export default KidsCategoriesHeader;