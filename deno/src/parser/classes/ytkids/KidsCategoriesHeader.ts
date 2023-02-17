import Parser from '../../index.ts';
import type Button from '../Button.ts';
import type KidsCategoryTab from './KidsCategoryTab.ts';
import { YTNode } from '../../helpers.ts';

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