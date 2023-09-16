import * as Proto from '../../proto/index.js';
import type Actions from '../Actions.js';
import type { ApiResponse } from '../Actions.js';

import { throwIfMissing } from '../../utils/Utils.js';
import { LikeEndpoint, DislikeEndpoint, RemoveLikeEndpoint } from '../endpoints/like/index.js';
import { SubscribeEndpoint, UnsubscribeEndpoint } from '../endpoints/subscription/index.js';
import { CreateCommentEndpoint, PerformCommentActionEndpoint } from '../endpoints/comment/index.js';
import { ModifyChannelPreferenceEndpoint } from '../endpoints/notification/index.js';

export default class InteractionManager {
  #actions: Actions;

  constructor(actions: Actions) {
    this.#actions = actions;
  }

  /**
   * Likes a given video.
   * @param video_id - The video ID
   */
  async like(video_id: string): Promise<ApiResponse> {
    throwIfMissing({ video_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const action = await this.#actions.execute(
      LikeEndpoint.PATH, LikeEndpoint.build({
        client: 'ANDROID',
        target: { video_id }
      })
    );

    return action;
  }

  /**
   * Dislikes a given video.
   * @param video_id - The video ID
   */
  async dislike(video_id: string): Promise<ApiResponse> {
    throwIfMissing({ video_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const action = await this.#actions.execute(
      DislikeEndpoint.PATH, DislikeEndpoint.build({
        client: 'ANDROID',
        target: { video_id }
      })
    );

    return action;
  }

  /**
   * Removes a like/dislike.
   * @param video_id - The video ID
   */
  async removeRating(video_id: string): Promise<ApiResponse> {
    throwIfMissing({ video_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const action = await this.#actions.execute(
      RemoveLikeEndpoint.PATH, RemoveLikeEndpoint.build({
        client: 'ANDROID',
        target: { video_id }
      })
    );

    return action;
  }

  /**
   * Subscribes to a given channel.
   * @param channel_id - The channel ID
   */
  async subscribe(channel_id: string): Promise<ApiResponse> {
    throwIfMissing({ channel_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const action = await this.#actions.execute(
      SubscribeEndpoint.PATH, SubscribeEndpoint.build({
        client: 'ANDROID',
        channel_ids: [ channel_id ],
        params: 'EgIIAhgA'
      })
    );

    return action;
  }

  /**
   * Unsubscribes from a given channel.
   * @param channel_id - The channel ID
   */
  async unsubscribe(channel_id: string): Promise<ApiResponse> {
    throwIfMissing({ channel_id });

    if (!this.#actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const action = await this.#actions.execute(
      UnsubscribeEndpoint.PATH, UnsubscribeEndpoint.build({
        client: 'ANDROID',
        channel_ids: [ channel_id ],
        params: 'CgIIAhgA'
      })
    );

    return action;
  }

  /**
   * Posts a comment on a given video.
   * @param video_id - The video ID
   * @param text - The comment text
   */
  async comment(video_id: string, text: string): Promise<ApiResponse> {
    throwIfMissing({ video_id, text });

    if (!this.#actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const action = await this.#actions.execute(
      CreateCommentEndpoint.PATH, CreateCommentEndpoint.build({
        comment_text: text,
        create_comment_params: Proto.encodeCommentParams(video_id),
        client: 'ANDROID'
      })
    );

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

    const response = await this.#actions.execute(
      PerformCommentActionEndpoint.PATH, PerformCommentActionEndpoint.build({
        client: 'ANDROID',
        actions: [ target_action ]
      })
    );

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
  async setNotificationPreferences(channel_id: string, type: 'PERSONALIZED' | 'ALL' | 'NONE'): Promise<ApiResponse> {
    throwIfMissing({ channel_id, type });

    if (!this.#actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const pref_types = {
      PERSONALIZED: 1,
      ALL: 2,
      NONE: 3
    };

    if (!Object.keys(pref_types).includes(type.toUpperCase()))
      throw new Error(`Invalid notification preference type: ${type}`);

    const action = await this.#actions.execute(
      ModifyChannelPreferenceEndpoint.PATH, ModifyChannelPreferenceEndpoint.build({
        client: 'WEB',
        params: Proto.encodeNotificationPref(channel_id, pref_types[type.toUpperCase() as keyof typeof pref_types])
      })
    );

    return action;
  }
}