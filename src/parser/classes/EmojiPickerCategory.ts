import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class EmojiPickerCategory extends YTNode {
  static type = 'EmojiPickerCategory';

  category_id: string;
  title: Text;
  emoji_ids: string[];
  image_loading_lazy: boolean;
  category_type: string;

  constructor(data: RawNode) {
    super();
    this.category_id = data.categoryId;
    this.title = new Text(data.title);
    this.emoji_ids = data.emojiIds;
    this.image_loading_lazy = !!data.imageLoadingLazy;
    this.category_type = data.categoryType;
  }
}