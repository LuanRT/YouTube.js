import Proto from '../proto';
import Actions from './Actions';
import { throwIfMissing } from '../utils/Utils';

class InteractionManager {
  #actions;

  constructor(actions: Actions) {
    this.#actions = actions;
  }

  /**
   * Likes a given video.
   * @param video_id - The video ID
   */
  async like(video_id: string) {
    throwIfMissing({ video_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You are not signed in');

    const action = await this.#actions.execute('/like/like', {
      client: 'ANDROID',
      target: {
        videoId: video_id
      }
    });

    return action;
  }

  /**
   * Dislikes a given video.
   * @param video_id - The video ID
   */
  async dislike(video_id: string) {
    throwIfMissing({ video_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You are not signed in');

    const action = await this.#actions.execute('/like/dislike', {
      client: 'ANDROID',
      target: {
        videoId: video_id
      }
    });

    return action;
  }

  /**
   * Removes a like/dislike.
   * @param video_id - The video ID
   */
  async removeRating(video_id: string) {
    throwIfMissing({ video_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You are not signed in');

    const action = await this.#actions.execute('/like/removelike', {
      client: 'ANDROID',
      target: {
        videoId: video_id
      }
    });

    return action;
  }

  /**
   * Subscribes to a given channel.
   * @param channel_id - The channel ID
   */
  async subscribe(channel_id: string) {
    throwIfMissing({ channel_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You are not signed in');

    const action = await this.#actions.execute('/subscription/subscribe', {
      client: 'ANDROID',
      channelIds: [ channel_id ],
      params: 'EgIIAhgA'
    });

    return action;
  }

  /**
   * Unsubscribes from a given channel.
   * @param channel_id - The channel ID
   */
  async unsubscribe(channel_id: string) {
    throwIfMissing({ channel_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You are not signed in');

    const action = await this.#actions.execute('/subscription/unsubscribe', {
      client: 'ANDROID',
      channelIds: [ channel_id ],
      params: 'CgIIAhgA'
    });

    return action;
  }

  /**
   * Posts a comment on a given video.
   * @param video_id - The video ID
   * @param text - The comment text
   */
  async comment(video_id: string, text: string) {
    throwIfMissing({ video_id, text });

    if (!this.#actions.session.logged_in)
      throw new Error('You are not signed in');

    const action = await this.#actions.execute('/comment/create_comment', {
      client: 'ANDROID',
      commentText: text,
      createCommentParams: Proto.encodeCommentParams(video_id)
    });

    return action;
  }

  /**
   * Translates a given text using YouTube's comment translate feature.
   *
   * @param target_language - an ISO language code
   * @param args - optional arguments
   */
  async translate(text: string, target_language: string, args: { video_id?: string; comment_id?: string; } = {}) {
    throwIfMissing({ text, target_language });

    const target_action = Proto.encodeCommentActionParams(22, { text, target_language, ...args });

    const response = await this.#actions.execute('/comment/perform_comment_action', {
      client: 'ANDROID',
      actions: [ target_action ]
    });

    const mutation = response.data.frameworkUpdates.entityBatchUpdate.mutations[0].payload.commentEntityPayload;

    return {
      success: response.success,
      status_code: response.status_code,
      translated_content: mutation.translatedContent.content,
      data: response.data
    };
  }

  /**
   * Changes notification preferences for a given channel.
   * Only works with channels you are subscribed to.
   * @param channel_id - The channel ID.
   * @param type - The notification type.
   */
  async setNotificationPreferences(channel_id: string, type: 'PERSONALIZED' | 'ALL' | 'NONE') {
    throwIfMissing({ channel_id, type });

    if (!this.#actions.session.logged_in)
      throw new Error('You are not signed in');

    const pref_types = {
      PERSONALIZED: 1,
      ALL: 2,
      NONE: 3
    };

    if (!Object.keys(pref_types).includes(type.toUpperCase()))
      throw new Error(`Invalid notification preference type: ${type}`);

    const action = await this.#actions.execute('/notification/modify_channel_preference', {
      client: 'ANDROID',
      params: Proto.encodeNotificationPref(channel_id, pref_types[type.toUpperCase() as keyof typeof pref_types])
    });

    return action;
  }
}

export default InteractionManager;