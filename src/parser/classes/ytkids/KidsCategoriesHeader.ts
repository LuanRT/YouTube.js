import Parser from '../..';
import type Button from '../Button';
import type KidsCategoryTab from './KidsCategoryTab';
import { YTNode } from '../../helpers';

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