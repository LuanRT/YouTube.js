'use strict';

import type { APIResponse } from '../utils/common';
import { findNode, throwIfMissing } from '../utils/Utils';
import type Actions from './Actions';

interface TranslateArgs {
  video_id?: string;
  comment_id?: string; 
}


/** @namespace */
class InteractionManager {
  #actions: Actions;

  constructor(actions: Actions) {
    this.#actions = actions;
  }

  /**
   * Likes a given video.
   *
   * @param video_id
   * 
   */
  async like(video_id: string): Promise<APIResponse<object>> {
    throwIfMissing({ video_id });
    const action = await this.#actions.engage('like/like', { video_id });
    return action;
  }

  /**
   * Dislikes a given video.
   *
   * @param video_id
   * 
   */
  async dislike(video_id: string): Promise<APIResponse<object>> {
    throwIfMissing({ video_id });
    const action = await this.#actions.engage('like/dislike', { video_id });
    return action;
  }

  /**
   * Removes a like/dislike.
   *
   * @param video_id
   * 
   */
  async removeLike(video_id: string): Promise<APIResponse<object>> {
    throwIfMissing({ video_id });
    const action = await this.#actions.engage('like/removelike', { video_id });
    return action;
  }

  /**
   * Subscribes to a given channel.
   *
   * @param channel_id
   * 
   */
  async subscribe(channel_id: string): Promise<APIResponse<object>> {
    throwIfMissing({ channel_id });
    const action = await this.#actions.engage('subscription/subscribe', { channel_id });
    return action;
  }

  /**
   * Unsubscribes from a given channel.
   *
   * @param channel_id
   * 
   */
  async unsubscribe(channel_id: string): Promise<APIResponse<object>> {
    throwIfMissing({ channel_id });
    const action = await this.#actions.engage('subscription/unsubscribe', { channel_id });
    return action;
  }

  /**
   * Posts a comment on a given video.
   *
   * @param video_id
   * @param text
   * 
   */
  async comment(video_id: string, text: string): Promise<APIResponse<object>> {
    throwIfMissing({ video_id, text });
    const action = await this.#actions.engage('comment/create_comment', { video_id, text });
    return action;
  }

  /**
   * Translates a given text using YouTube's comment translate feature.
   *
   * @param text
   * @param target_language - an ISO language code
   * @param args - optional arguments
   * 
   */
  async translate(text: string, target_language: string, args: TranslateArgs = {}): Promise<{ success: boolean; status_code: number; translated_content: string; data: object; }> {
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
   *
   * @param channel_id
   * @param type - `PERSONALIZED` | `ALL` | `NONE`
   * 
   */
  async setNotificationPreferences(channel_id: string, type: string): Promise<APIResponse<object>> {
    throwIfMissing({ channel_id, type });
    const action = await this.#actions.notifications('modify_channel_preference', { channel_id, pref: type || 'NONE' });
    return action;
  }
}

export default InteractionManager;