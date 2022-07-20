import { throwIfMissing, findNode } from '../utils/Utils';
import Actions from './Actions';

class InteractionManager {
  #actions;
  constructor(actions: Actions) {
    this.#actions = actions;
  }
  /**
   * Likes a given video.
   */
  async like(video_id: string) {
    throwIfMissing({ video_id });
    const action = await this.#actions.engage('like/like', { video_id });
    return action;
  }
  /**
   * Dislikes a given video.
   */
  async dislike(video_id: string) {
    throwIfMissing({ video_id });
    const action = await this.#actions.engage('like/dislike', { video_id });
    return action;
  }
  /**
   * Removes a like/dislike.
   */
  async removeLike(video_id: string) {
    throwIfMissing({ video_id });
    const action = await this.#actions.engage('like/removelike', { video_id });
    return action;
  }
  /**
   * Subscribes to a given channel.
   */
  async subscribe(channel_id: string) {
    throwIfMissing({ channel_id });
    const action = await this.#actions.engage('subscription/subscribe', { channel_id });
    return action;
  }
  /**
   * Unsubscribes from a given channel.
   */
  async unsubscribe(channel_id: string) {
    throwIfMissing({ channel_id });
    const action = await this.#actions.engage('subscription/unsubscribe', { channel_id });
    return action;
  }
  /**
   * Posts a comment on a given video.
   */
  async comment(video_id: string, text: string) {
    throwIfMissing({ video_id, text });
    const action = await this.#actions.engage('comment/create_comment', { video_id, text });
    return action;
  }
  /**
   * Translates a given text using YouTube's comment translate feature.
   *
   * @param target_language - an ISO language code
   * @param args - optional arguments
   */
  async translate(text: string, target_language: string, args: {
        video_id?: string;
        comment_id?: string;
    } = {}) {
    throwIfMissing({ text, target_language });
    const response = await await this.#actions.engage('comment/perform_comment_action', {
      video_id: args.video_id,
      comment_id: args.comment_id,
      target_language: target_language,
      comment_action: 'translate',
      text
    });
    const translated_content = findNode(response.data, 'frameworkUpdates', 'content', 7, false);
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
   */
  async setNotificationPreferences(channel_id: string, type: 'PERSONALIZED' | 'ALL' | 'NONE') {
    throwIfMissing({ channel_id, type });
    const action = await this.#actions.notifications('modify_channel_preference', { channel_id, pref: type || 'NONE' });
    return action;
  }
}
export default InteractionManager;
