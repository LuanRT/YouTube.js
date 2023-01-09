import Text from './misc/Text';
import { YTNode } from '../helpers';

class EmojiPickerCategory extends YTNode {
  static type = 'EmojiPickerCategory';

  category_id: string;
  title: Text;
  emoji_ids: string[];
  image_loading_lazy: boolean;
  category_type: string;

  constructor(data: any) {
    super();
    this.category_id = data.categoryId;
    this.title = new Text(data.title);
    this.emoji_ids = data.emojiIds;
    this.image_loading_lazy = !!data.imageLoadingLazy;
    this.category_type = data.categoryType;
  }
}

export default EmojiPickerCategory;