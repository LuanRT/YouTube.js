'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const Author = require('./Author');
const Proto = require('../../../proto');
const { InnertubeError } = require('../../../utils/Utils');

class Comment {
  type = 'Comment';
  
  #actions;
  
  constructor(data) {
    this.content = new Text(data.contentText);
    this.published = new Text(data.publishedTimeText);
    this.author_is_channel_owner = data.authorIsChannelOwner;
    this.current_user_reply_thumbnail = Thumbnail.fromResponse(data.currentUserReplyThumbnail);
    this.author_badge = Parser.parse(data.authorCommentBadge, 'comments');

    this.author = new Author({
      ...data.authorText,
      navigationEndpoint: data.authorEndpoint
    }, this.author_badge && [ {
        metadataBadgeRenderer: this.author_badge?.orig_badge
      }] || null, data.authorThumbnail);

    this.action_menu = Parser.parse(data.actionMenu);
    this.action_buttons = Parser.parse(data.actionButtons, 'comments');
    this.comment_id = data.commentId;
    this.vote_status = data.voteStatus;

    this.vote_count = {
      text: data.voteCount ? data.voteCount.accessibility.accessibilityData?.label.replace(/\D/g, ''): '0',
      short_text: data.voteCount ? new Text(data.voteCount).toString(): '0'
    }

    this.reply_count = data.replyCount || 0;
    this.is_liked = this.action_buttons.like_button.is_toggled;
    this.is_disliked = this.action_buttons.dislike_button.is_toggled;
    this.is_pinned = !!data.pinnedCommentBadge;
  }
  
  /**
   * API response.
   * @typedef {{ success: boolean, status_code: number, data: object }} Response
   */
  
  /**
   * Likes the comment.
   * @returns {Promise.<Response>}
   */
  async like() {
    const button = this.action_buttons.like_button;
    
    if (button.is_toggled) 
      throw new InnertubeError('This comment is already liked', { comment_id: this.comment_id }); 
      
    const response = await button.endpoint.callTest(this.#actions, { parse: false });
   
    return response;
  }
  
  /**
   * Dislikes the comment.
   * @returns {Promise.<Response>}
   */
  async dislike() {
    const button = this.action_buttons.dislike_button;
    
    if (button.is_toggled) 
      throw new InnertubeError('This comment is already disliked', { comment_id: this.comment_id }); 
      
    const response = await button.endpoint.callTest(this.#actions, { parse: false });
   
    return response;
  }
  
  /**
   * Creates a reply to the comment.
   * @param {string} text
   * @returns {Promise.<Response>}
   */
  async reply(text) {
    if (!this.action_buttons.reply_button)
      throw new InnertubeError('Cannot reply to another reply. Try mentioning the user instead.', { comment_id: this.comment_id });
    
    const button = this.action_buttons.reply_button;
    const dialog_button = button.endpoint.dialog.reply_button;
    
    const payload = {
      params: {
        commentText: text
      }
    };
    
    const response = await dialog_button.endpoint.callTest(this.#actions, payload);
    
    return response;
  }
  
  /**
   * Translates the comment to the given language.
   * @param {string} target_language
   */
  async translate(target_language) {
    // Emojis must be removed otherwise InnerTube throws a 400 status code at us.
    const text = this.content.toString().replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '');
    
    const payload = {
      text,
      target_language,
      comment_id: this.comment_id
    };
    
    const action = Proto.encodeCommentActionParams(22, payload);
    const response = await this.#actions.execute('comment/perform_comment_action', { action, client: 'ANDROID' });
  
    // TODO: maybe add these to Parser#parseResponse?
    const mutations = response.data.frameworkUpdates.entityBatchUpdate.mutations;
    const content = mutations[0].payload.commentEntityPayload.translatedContent.content;
  
    return { ...response, content };
  }
  
  /**
   * @param {import('../../../../core/Actions')} actions
   * @private
   */
  setActions(actions) {
    this.#actions = actions;
  }
}

module.exports = Comment;