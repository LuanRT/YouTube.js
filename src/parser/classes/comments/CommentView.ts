import { YTNode } from '../../helpers.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import Author from '../misc/Author.js';
import Text from '../misc/Text.js';
import CommentReplyDialog from './CommentReplyDialog.js';
import { InnertubeError } from '../../../utils/Utils.js';
import * as ProtoUtils from '../../../utils/ProtoUtils.js';

import type Actions from '../../../core/Actions.js';
import type { ApiResponse } from '../../../core/Actions.js';
import type { RawNode } from '../../index.js';

// TODO: Move these types to a different file.
export type CommentKeys = {
  comment: string;
  comment_surface: string;
  toolbar_state: string;
  toolbar_surface: string;
  shared: string;
}

export type MemberBadge = {
  url: string;
  a11y: string;
}

export default class CommentView extends YTNode {
  static type = 'CommentView';

  #actions?: Actions;

  public like_command?: NavigationEndpoint;
  public dislike_command?: NavigationEndpoint;
  public unlike_command?: NavigationEndpoint;
  public undislike_command?: NavigationEndpoint;
  public reply_command?: NavigationEndpoint;
  public prepare_account_command?: NavigationEndpoint;

  public comment_id: string;
  public is_pinned: boolean;
  public keys: CommentKeys;

  public content?: Text;
  public published_time?: string;
  public author_is_channel_owner?: boolean;
  public creator_thumbnail_url?: string;
  public like_button_a11y?: string;
  public like_count?: string;
  public like_count_liked?: string;
  public like_count_a11y?: string;
  public like_active_tooltip?: string;
  public like_inactive_tooltip?: string;
  public dislike_active_tooltip?: string;
  public dislike_inactive_tooltip?: string;
  public heart_active_tooltip?: string;
  public reply_count?: string;
  public reply_count_a11y?: string;
  public is_member?: boolean;
  public member_badge?: MemberBadge;
  public author?: Author;

  public is_liked?: boolean;
  public is_disliked?: boolean;
  public is_hearted?: boolean;

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

  applyMutations(comment?: RawNode, toolbar_state?: RawNode, toolbar_surface?: RawNode) {
    if (comment) {
      this.content = Text.fromAttributed(comment.properties.content);
      this.published_time = comment.properties.publishedTime;
      this.author_is_channel_owner = !!comment.author.isCreator;
      this.creator_thumbnail_url = comment.toolbar.creatorThumbnailUrl;
      
      this.like_count = comment.toolbar.likeCountNotliked ? comment.toolbar.likeCountNotliked : '0';
      this.like_count_liked = comment.toolbar.likeCountLiked ? comment.toolbar.likeCountLiked : '0';
      this.like_count_a11y = comment.toolbar.likeCountA11y;
      this.like_active_tooltip = comment.toolbar.likeActiveTooltip;
      this.like_inactive_tooltip = comment.toolbar.likeInactiveTooltip;
      this.dislike_active_tooltip = comment.toolbar.dislikeActiveTooltip;
      this.dislike_inactive_tooltip = comment.toolbar.dislikeInactiveTooltip;
      this.like_button_a11y = comment.toolbar.likeButtonA11y;
      this.heart_active_tooltip = comment.toolbar.heartActiveTooltip;
      this.reply_count_a11y = comment.toolbar.replyCountA11y;
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
      this.is_disliked = toolbar_state.likeState === 'TOOLBAR_LIKE_STATE_DISLIKED';
    }

    if (toolbar_surface) {
      if ('prepareAccountCommand' in toolbar_surface) {
        this.prepare_account_command = new NavigationEndpoint(toolbar_surface.prepareAccountCommand);
      } else {
        this.like_command = new NavigationEndpoint(toolbar_surface.likeCommand);
        this.dislike_command = new NavigationEndpoint(toolbar_surface.dislikeCommand);
        this.unlike_command = new NavigationEndpoint(toolbar_surface.unlikeCommand);
        this.undislike_command = new NavigationEndpoint(toolbar_surface.undislikeCommand);
        this.reply_command = new NavigationEndpoint(toolbar_surface.replyCommand);
      }
    }
  }

  /**
   * Likes the comment.
   * @returns A promise that resolves to the API response.
   * @throws If the Actions instance is not set for this comment or if the like command is not found.
   */
  async like(): Promise<ApiResponse> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment.');

    if (!this.like_command)
      throw new InnertubeError('Like command not found.');

    if (this.is_liked)
      throw new InnertubeError('This comment is already liked.', { comment_id: this.comment_id });

    return this.like_command.call(this.#actions);
  }

  /**
   * Dislikes the comment.
   * @returns A promise that resolves to the API response.
   * @throws If the Actions instance is not set for this comment or if the dislike command is not found.
   */
  async dislike(): Promise<ApiResponse> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment.');

    if (!this.dislike_command)
      throw new InnertubeError('Dislike command not found.');

    if (this.is_disliked)
      throw new InnertubeError('This comment is already disliked.', { comment_id: this.comment_id });

    return this.dislike_command.call(this.#actions);
  }

  /**
   * Unlikes the comment.
   * @returns A promise that resolves to the API response.
   * @throws If the Actions instance is not set for this comment or if the unlike command is not found.
   */
  async unlike(): Promise<ApiResponse> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment.');

    if (!this.unlike_command)
      throw new InnertubeError('Unlike command not found.');

    if (!this.is_liked)
      throw new InnertubeError('This comment is not liked.', { comment_id: this.comment_id });

    return this.unlike_command.call(this.#actions);
  }

  /**
   * Undislikes the comment.
   * @returns A promise that resolves to the API response.
   * @throws If the Actions instance is not set for this comment or if the undislike command is not found.
   */
  async undislike(): Promise<ApiResponse> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment.');

    if (!this.undislike_command)
      throw new InnertubeError('Undislike command not found.');

    if (!this.is_disliked)
      throw new InnertubeError('This comment is not disliked.', { comment_id: this.comment_id });

    return this.undislike_command.call(this.#actions);
  }

  /**
   * Replies to the comment.
   * @param comment_text - The text of the reply.
   * @returns A promise that resolves to the API response.
   * @throws If the Actions instance is not set for this comment or if the reply command is not found.
   */
  async reply(comment_text: string): Promise<ApiResponse> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment.');

    if (!this.reply_command)
      throw new InnertubeError('Reply command not found.');

    const dialog = this.reply_command.dialog?.as(CommentReplyDialog);

    if (!dialog)
      throw new InnertubeError('Reply dialog not found.');

    const reply_button = dialog.reply_button;

    if (!reply_button)
      throw new InnertubeError('Reply button not found in the dialog.');

    if (!reply_button.endpoint)
      throw new InnertubeError('Reply button endpoint not found.');

    return reply_button.endpoint.call(this.#actions, { commentText: comment_text });
  }

  /**
   * Translates the comment to the specified target language.
   * @param target_language - The target language to translate the comment to, e.g. 'en', 'ja'.
   * @returns Resolves to an ApiResponse object with the translated content, if available.
   * @throws if the Actions instance is not set for this comment or if the comment content is not found.
   */
  async translate(target_language: string): Promise<ApiResponse & { content?: string }> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment.');

    if (!this.content)
      throw new InnertubeError('Comment content not found.', { comment_id: this.comment_id });

    // Emojis must be removed otherwise InnerTube throws a 400 status code at us.
    const text = this.content.toString().replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '');

    const payload = { text, target_language };

    const action = ProtoUtils.encodeCommentActionParams(22, payload);
    const response = await this.#actions.execute('comment/perform_comment_action', { action });

    // XXX: Should move this to Parser#parseResponse
    const mutations = response.data.frameworkUpdates?.entityBatchUpdate?.mutations;
    const content = mutations?.[0]?.payload?.commentEntityPayload?.translatedContent?.content;

    return { ...response, content };
  }

  setActions(actions: Actions | undefined) {
    this.#actions = actions;
  }
}