import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

import type Actions from '../../../core/Actions.ts';
import Author from '../misc/Author.ts';
import Text from '../misc/Text.ts';

export default class CommentView extends YTNode {
  static type = 'CommentView';

  #actions?: Actions;

  comment_id: string;
  is_pinned: boolean;
  keys: {
    comment: string;
    comment_surface: string;
    toolbar_state: string;
    toolbar_surface: string;
    shared: string;
  };

  content?: Text;
  published_time?: string;
  author_is_channel_owner?: boolean;
  like_count?: string;
  reply_count?: string;
  is_member?: boolean;
  member_badge?: {
    url: string,
    a11y: string;
  };
  author?: Author;

  is_liked?: boolean;
  is_disliked?: boolean;
  is_hearted?: boolean;

  constructor(data: RawNode) {
    super();

    this.comment_id = data.commentId;
    this.is_pinned = !!data.pinnedText;

    this.keys = {
      comment: data.commentKey,
      comment_surface: data.commentSurfaceKey,
      toolbar_state: data.toolbarStateKey,
      toolbar_surface: data.toolbarSurfaceKey,
      shared: data.sharedKey
    };
  }

  applyMutations(comment?: RawNode, toolbar_state?: RawNode) {
    if (comment) {
      this.content = Text.fromAttributed(comment.properties.content);
      this.published_time = comment.properties.publishedTime;
      this.author_is_channel_owner = !!comment.author.isCreator;

      this.like_count = comment.toolbar.likeCountNotliked ? comment.toolbar.likeCountNotliked : '0';
      this.reply_count = comment.toolbar.replyCount ? comment.toolbar.replyCount : '0';

      this.is_member = !!comment.author.sponsorBadgeUrl;

      if (Reflect.has(comment.author, 'sponsorBadgeUrl')) {
        this.member_badge = {
          url: comment.author.sponsorBadgeUrl,
          a11y: comment.author.A11y
        };
      }

      this.author = new Author({
        simpleText: comment.author.displayName,
        navigationEndpoint: comment.avatar.endpoint
      }, comment.author, comment.avatar.image, comment.author.channelId);
    }

    if (toolbar_state) {
      this.is_hearted = toolbar_state.heartState === 'TOOLBAR_HEART_STATE_HEARTED';
      this.is_liked = toolbar_state.likeState === 'TOOLBAR_LIKE_STATE_LIKED';
      this.is_disliked = toolbar_state.likeState === 'TOOLBAR_HEART_STATE_DISLIKED';
    }
  }

  setActions(actions: Actions | undefined) {
    this.#actions = actions;
  }
}