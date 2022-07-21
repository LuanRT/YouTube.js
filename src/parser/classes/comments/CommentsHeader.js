import Parser from '../../index';
import Text from '../misc/Text';
import Thumbnail from '../misc/Thumbnail';
import { YTNode } from '../../helpers';

class CommentsHeader extends YTNode {
  static type = 'CommentsHeader';

  constructor(data) {
    super();
    this.title = new Text(data.titleText);
    this.count = new Text(data.countText);
    this.comments_count = new Text(data.commentsCount);
    this.create_renderer = Parser.parseItem(data.createRenderer);
    this.sort_menu = Parser.parse(data.sortMenu);

    this.custom_emojis = data.customEmojis?.map((emoji) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: Thumbnail.fromResponse(emoji.image),
      is_custom_emoji: emoji.isCustomEmoji
    })) || null;
  }
}

export default CommentsHeader;