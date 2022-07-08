'use strict';

const Utils = require('../utils/Utils');

/** @namespace */
class InteractionManager {
  #actions;

  /**
   * @param {import('../Actions')} actions
   */
  constructor(actions) {
    this.#actions = actions;
  }

  /**
   * API response.
   *
   * @typedef {{ success: boolean, status_code: number, data: object }} Response
   */

  /**
   * Likes a given video.
   *
   * @param {string} video_id
   * @returns {Promise.<Response>}
   */
  async like(video_id) {
    Utils.throwIfMissing({ video_id });
    const action = await this.#actions.engage('like/like', { video_id });
    return action;
  }

  /**
   * Dislikes a given video.
   *
   * @param {string} video_id
   * @returns {Promise.<Response>}
   */
  async dislike(video_id) {
    Utils.throwIfMissing({ video_id });
    const action = await this.#actions.engage('like/dislike', { video_id });
    return action;
  }

  /**
   * Removes a like/dislike.
   *
   * @param {string} video_id
   * @returns {Promise.<Response>}
   */
  async removeLike(video_id) {
    Utils.throwIfMissing({ video_id });
    const action = await this.actions.engage('like/removelike', { video_id });
    return action;
  }

  /**
   * Subscribes to a given channel.
   *
   * @param {string} channel_id
   * @returns {Promise.<Response>}
   */
  async subscribe(channel_id) {
    Utils.throwIfMissing({ channel_id });
    const action = await this.#actions.engage('subscription/subscribe', { channel_id });
    return action;
  }

  /**
   * Unsubscribes from a given channel.
   *
   * @param {string} channel_id
   * @returns {Promise.<Response>}
   */
  async unsubscribe(channel_id) {
    Utils.throwIfMissing({ channel_id });
    const action = await this.#actions.engage('subscription/unsubscribe', { channel_id });
    return action;
  }

  /**
   * Posts a comment on a given video.
   *
   * @param {string} video_id
   * @param {string} text
   * @returns {Promise.<Response>}
   */
  async comment(video_id, text) {
    Utils.throwIfMissing({ video_id, text });
    const action = await this.#actions.engage('comment/create_comment', { video_id, text });
    return action;
  }

  /**
   * Translates a given text using YouTube's comment translate feature.
   *
   * @param {string} text
   * @param {string} target_language - an ISO language code
   * @param {object} [args] - optional arguments
   * @param {string} [args.video_id]
   * @param {string} [args.comment_id]
   * @returns {Promise.<{ success: boolean, status_code: number, translated_content: string, data: object }>}
   */
  async translate(text, target_language, args = {}) {
    Utils.throwIfMissing({ text, target_language });

    const response = await await this.#actions.engage('comment/perform_comment_action', {
      video_id: args.video_id,
      comment_id: args.comment_id,
      target_language: target_language,
      comment_action: 'translate',
      text
    });

    const translated_content = Utils.findNode(response.data, 'frameworkUpdates', 'content', 7, false);

    return {
      success: response.success,
      status_code: response.status_code,
      translated_content: translated_content.content,
      data: response.data
    };
  }

  /**
   * Changes notification preferences for a given channel.
   * Only works with channels you are subscribed to.
   *
   * @param {string} channel_id
   * @param {string} type - `PERSONALIZED` | `ALL` | `NONE`
   * @returns {Promise.<Response>}
   */
  async setNotificationPreferences(channel_id, type) {
    Utils.throwIfMissing({ channel_id, type });
    const action = await this.#actions.notifications('modify_channel_preference', { channel_id, pref: type || 'NONE' });
    return action;
  }
}

module.exports = InteractionManager;