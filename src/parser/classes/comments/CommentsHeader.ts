import { Parser } from '../../index.js';
import SortFilterSubMenu from '../SortFilterSubMenu.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';

import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export type CustomEmoji = {
  emoji_id: string;
  shortcuts: string[];
  search_terms: string[];
  image: Thumbnail[];
  is_custom_emoji: boolean;
}

export default class CommentsHeader extends YTNode {
  static type = 'CommentsHeader';

  public title: Text;
  public count: Text;
  public comments_count: Text;
  public create_renderer;
  public sort_menu: SortFilterSubMenu | null;
  public custom_emojis?: CustomEmoji[];

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.titleText);
    this.count = new Text(data.countText);
    this.comments_count = new Text(data.commentsCount);
    this.create_renderer = Parser.parseItem(data.createRenderer);
    this.sort_menu = Parser.parseItem(data.sortMenu, SortFilterSubMenu);

    if (Reflect.has(data, 'customEmojis')) {
      this.custom_emojis = data.customEmojis.map((emoji: RawNode) => ({
        emoji_id: emoji.emojiId,
        shortcuts: emoji.shortcuts,
        search_terms: emoji.searchTerms,
        image: Thumbnail.fromResponse(emoji.image),
        is_custom_emoji: emoji.isCustomEmoji
      }));
    }
  }
}