import Parser from '../../index.ts';
import type Button from '../Button.ts';
import type KidsCategoryTab from './KidsCategoryTab.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class KidsCategoriesHeader extends YTNode {
  static type = 'kidsCategoriesHeader';

  category_tabs: KidsCategoryTab[];
  privacy_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.category_tabs = Parser.parseArray<KidsCategoryTab>(data.categoryTabs);
    this.privacy_button = Parser.parseItem<Button>(data.privacyButtonRenderer);
  }
}

export default KidsCategoriesHeader;