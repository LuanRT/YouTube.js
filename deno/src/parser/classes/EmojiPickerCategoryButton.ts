import { YTNode } from '../helpers.ts';

class EmojiPickerCategoryButton extends YTNode {
  static type = 'EmojiPickerCategoryButton';

  category_id: string;
  icon_type: string;
  tooltip: string;

  constructor(data: any) {
    super();
    this.category_id = data.categoryId;
    this.icon_type = data.icon?.iconType;
    this.tooltip = data.tooltip;
  }
}

export default EmojiPickerCategoryButton;