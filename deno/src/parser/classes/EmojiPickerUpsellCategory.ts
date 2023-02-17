import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class EmojiPickerUpsellCategory extends YTNode {
  static type = 'EmojiPickerUpsellCategory';

  category_id: string;
  title: Text;
  upsell: Text;
  emoji_tooltip: string;
  endpoint: NavigationEndpoint;
  emoji_ids: string[];

  constructor(data: any) {
    super();
    this.category_id = data.categoryId;
    this.title = new Text(data.title);
    this.upsell = new Text(data.upsell);
    this.emoji_tooltip = data.emojiTooltip;
    this.endpoint = new NavigationEndpoint(data.command);
    this.emoji_ids = data.emojiIds;
  }
}

export default EmojiPickerUpsellCategory;