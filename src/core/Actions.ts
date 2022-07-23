import Proto from '../proto/index';
import Session from './Session';

import Parser, { ParsedResponse } from '../parser/index';

import { hasKeys, InnertubeError, MissingParamError, uuidv4 } from '../utils/Utils';

export interface BrowseArgs {
  params?: string;
  is_ytm?: boolean;
  is_ctoken?: boolean;
  client?: string;
}

export interface EngageArgs {
  video_id?: string;
  channel_id?: string;
  comment_id?: string;
  comment_action?: string;
  params?: string;
  text?: string;
  target_language?: string;
}

export interface AccountArgs {
  new_value?: string | boolean; // TODO: is this correct?
  setting_item_id?: string;
  client?: string;
}

export interface SearchArgs {
  query?: string,
  options?: {
    period?: string,
    duration?: string,
    order?: string
  },
  client?: string,
  ctoken?: string,
  params?: string
  filters?: any // TODO: what is this type??
}

export interface AxioslikeResponse {
  success: boolean;
  status_code: number;
  data: any;
}

export type ActionsResponse = Promise<AxioslikeResponse>;

class Actions {
  #session;

  constructor(session: Session) {
    this.#session = session;
  }

  get session() {
    return this.#session;
  }

  /**
   * Mimmics the Axios API using Fetch's Response object.
   */
  async #wrap(response: Response, protobuf?: boolean) {
    return {
      success: response.ok,
      status_code: response.status,
      data: protobuf ? await response.text() : JSON.parse(await response.text())
    };
  }

  /**
   * Covers `/browse` endpoint, mostly used to access
   * YouTube's sections such as the home feed, etc
   * and sometimes to retrieve continuations.
   *
   * @param id - browseId or a continuation token
   * @param args - additional arguments
   */
  async browse(id: string, args: BrowseArgs = {}) {
    if (this.#needsLogin(id) && !this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const data: Record<string, any> = {};

    if (args.params)
      data.params = args.params;

    if (args.is_ctoken) {
      data.continuation = id;
    } else {
      data.browseId = id;
    }

    if (args.client) {
      data.client = args.client;
    }

    const response = await this.#session.http.fetch('/browse', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Covers endpoints used to perform direct interactions
   * on YouTube.
   */
  async engage(action: string, args: EngageArgs = {}) {
    if (!this.#session.logged_in && !args.hasOwnProperty('text'))
      throw new InnertubeError('You are not signed in');

    const data: Record<string, any> = {};

    switch (action) {
      case 'like/like':
      case 'like/dislike':
      case 'like/removelike':
        if (!hasKeys(args, 'video_id'))
          throw new MissingParamError('Arguments lacks video_id');

        data.target = {};
        data.target.videoId = args.video_id;

        if (args.params) {
          data.params = args.params;
        }
        break;
      case 'subscription/subscribe':
      case 'subscription/unsubscribe':
        if (!hasKeys(args, 'channel_id'))
          throw new MissingParamError('Arguments lacks channel_id');

        data.channelIds = [ args.channel_id ];
        data.params = action === 'subscription/subscribe' ? 'EgIIAhgA' : 'CgIIAhgA';
        break;
      case 'comment/create_comment':
        data.commentText = args.text;

        if (!hasKeys(args, 'video_id'))
          throw new MissingParamError('Arguments lacks video_id');

        data.createCommentParams = Proto.encodeCommentParams(args.video_id);
        break;
      case 'comment/create_comment_reply':
        if (!hasKeys(args, 'comment_id', 'video_id', 'text'))
          throw new MissingParamError('Arguments lacks comment_id, video_id or text');

        data.createReplyParams = Proto.encodeCommentReplyParams(args.comment_id, args.video_id);
        data.commentText = args.text;
        break;
      case 'comment/perform_comment_action':
        const target_action = (() => {
          switch (args.comment_action) {
            case 'like':
              return Proto.encodeCommentActionParams(5, args);
            case 'dislike':
              return Proto.encodeCommentActionParams(4, args);
            case 'translate':
              return Proto.encodeCommentActionParams(22, args);
            default:
              break;
          }
        })();
        data.actions = [ target_action ];
        break;
      default:
        throw new InnertubeError('Action not implemented', action);
    }

    const response = await this.#session.http.fetch(`/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Covers endpoints related to account management.
   */
  async account(action: string, args: AccountArgs = {}) {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const data: Record<string, any> = { client: args.client };

    switch (action) {
      case 'account/set_setting':
        data.newValue = {
          boolValue: args.new_value
        };
        data.settingItemId = args.setting_item_id;
        break;
      case 'account/accounts_list':
        break;
      default:
        throw new InnertubeError('Action not implemented', action);
    }

    const response = await this.#session.http.fetch(`/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Endpoint used for search.
   */
  async search(args: SearchArgs = {}) {
    const data: Record<string, any> = { client: args.client };

    if (args.query) {
      data.query = args.query;
    }

    if (args.ctoken) {
      data.continuation = args.ctoken;
    }

    if (args.params) {
      data.params = args.params;
    }

    if (args.filters) {
      if (args.client == 'YTMUSIC' && args.filters?.type && args.filters.type !== 'all') {
        data.params = Proto.encodeMusicSearchFilters(args.filters);
      } else {
        data.params = Proto.encodeSearchFilters(args.filters);
      }
    }

    const response = await this.#session.http.fetch('/search', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Endpoint used fo Shorts' sound search.
   */
  async searchSound(args: { query: string; }) {
    const data = {
      query: args.query,
      client: 'ANDROID'
    };

    const response = await this.#session.http.fetch('/sfv/search', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Channel management endpoints.
   */
  async channel(action: string, args: { new_name?: string; new_description?: string; client?: string; } = {}) {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const data: Record<string, any> = { client: args.client || 'ANDROID' };

    switch (action) {
      case 'channel/edit_name':
        data.givenName = args.new_name;
        break;
      case 'channel/edit_description':
        data.description = args.new_description;
        break;
      case 'channel/get_profile_editor':
        break;
      default:
        throw new InnertubeError('Action not implemented', action);
    }

    const response = await this.#session.http.fetch(`/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Covers endpoints used for playlist management.
   */
  async playlist(action: string, args: {
    title?: string;
    ids?: string[];
    playlist_id?: string;
    action?: string;
  } = {}) {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const data: Record<string, any> = {};

    switch (action) {
      case 'playlist/create':
        data.title = args.title;
        data.videoIds = args.ids;
        break;
      case 'playlist/delete':
        data.playlistId = args.playlist_id;
        break;
      case 'browse/edit_playlist':
        if (!hasKeys(args, 'ids'))
          throw new MissingParamError('Arguments lacks ids');
        data.playlistId = args.playlist_id;
        data.actions = args.ids.map((id) => {
          switch (args.action) {
            case 'ACTION_ADD_VIDEO':
              return {
                action: args.action,
                addedVideoId: id
              };
            case 'ACTION_REMOVE_VIDEO':
              return {
                action: args.action,
                setVideoId: id
              };
            default:
              break;
          }
        });
        break;
      default:
        throw new InnertubeError('Action not implemented', action);
    }

    const response = await this.#session.http.fetch(`/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Covers endpoints used for notifications management.
   */
  async notifications(action: string, args: {
    pref?: string;
    channel_id?: string;
    ctoken?: string;
    params?: string
  } = {}) {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const data: Record<string, any> = {};

    switch (action) {
      case 'modify_channel_preference':
        if (!hasKeys(args, 'channel_id', 'pref'))
          throw new MissingParamError('Arguments lacks channel_id or pref');
        const pref_types = {
          PERSONALIZED: 1,
          ALL: 2,
          NONE: 3
        };
        if (!Object.keys(pref_types).includes(args.pref.toUpperCase()))
          throw new InnertubeError('Invalid preference type', args.pref);
        data.params = Proto.encodeNotificationPref(args.channel_id, pref_types[args.pref.toUpperCase() as keyof typeof pref_types]);
        break;
      case 'get_notification_menu':
        data.notificationsMenuRequestType = 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX';
        if (args.ctoken)
          data.ctoken = args.ctoken;
        break;
      case 'record_interactions':
        data.serializedRecordNotificationInteractionsRequest = args.params;
        break;
      case 'get_unseen_count':
        break;
      default:
        throw new InnertubeError('Action not implemented', action);
    }

    const response = await this.#session.http.fetch(`/notification/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Covers livechat endpoints.
   */
  async livechat(action: string, args: {
    text?: string;
    video_id?: string;
    channel_id?: string;
    ctoken?: string;
    params?: string;
    client?: string;
  } = {}) {
    // TODO: should client be required?
    const data: Record<string, any> = { client: args.client };

    switch (action) {
      case 'live_chat/get_live_chat':
      case 'live_chat/get_live_chat_replay':
        data.continuation = args.ctoken;
        break;
      case 'live_chat/send_message':
        if (!hasKeys(args, 'channel_id', 'video_id', 'text'))
          throw new MissingParamError('Arguments lacks channel_id, video_id or text');
        data.params = Proto.encodeMessageParams(args.channel_id, args.video_id);
        data.clientMessageId = uuidv4();
        data.richMessage = {
          textSegments: [ {
            text: args.text
          } ]
        };
        break;
      case 'live_chat/get_item_context_menu':
        // Note: this is currently broken due to a recent refactor
        // TODO: this should be implemented
        break;
      case 'live_chat/moderate':
        data.params = args.params;
        break;
      case 'updated_metadata':
        data.videoId = args.video_id;
        if (args.ctoken)
          data.continuation = args.ctoken;
        break;
      default:
        throw new InnertubeError('Action not implemented', action);
    }

    const response = await this.#session.http.fetch(`/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Endpoint used to retrieve video thumbnails.
   */
  async thumbnails(args: { video_id: string; }) {
    const data = {
      client: 'ANDROID',
      videoId: args.video_id
    };

    const response = await this.#session.http.fetch('/thumbnails', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Place Autocomplete endpoint, found it in the APK but
   * doesn't seem to be used anywhere on YouTube (maybe for ads?).
   *
   * Ex:
   * ```js
   * const places = await session.actions.geo('place_autocomplete', { input: 'San diego cafe' });
   * console.info(places.data);
   * ```
   */
  async geo(action: string, args: { input: string; }) {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const data = {
      input: args.input,
      client: 'ANDROID'
    };

    const response = await this.#session.http.fetch(`/geo/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Covers endpoints used to report content.
   */
  async flag(action: string, args: { action: string; params?: string; }) {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const data: Record<string, any> = {};

    switch (action) {
      case 'flag/flag':
        data.action = args.action;
        break;
      case 'flag/get_form':
        data.params = args.params;
        break;
      default:
        throw new InnertubeError('Action not implemented', action);
    }

    const response = await this.#session.http.fetch(`/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Covers specific YouTube Music endpoints.
   */
  async music(action: string, args: { input?: string; }) {
    const data = {
      input: args.input || '',
      client: 'YTMUSIC'
    };

    const response = await this.#session.http.fetch(`/music/${action}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Mostly used for pagination and specific operations.
   */
  async next(args: { video_id?: string; ctoken?: string; client?: string; } = {}) {
    const data: Record<string, any> = { client: args.client };

    if (args.ctoken) {
      data.continuation = args.ctoken;
    }

    if (args.video_id) {
      data.videoId = args.video_id;
    }

    const response = await this.#session.http.fetch('/next', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Used to retrieve video info.
   */
  async getVideoInfo(id: string, cpn?: string, client?: string) {
    const data: Record<string, any> = {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          referer: 'https://www.youtube.com',
          currentUrl: `/watch?v=${id}`,
          autonavState: 'STATE_OFF',
          signatureTimestamp: this.#session.player.sts,
          autoCaptionsDefaultOn: false,
          html5Preference: 'HTML5_PREF_WANTS',
          lactMilliseconds: '-1'
        }
      },
      attestationRequest: {
        omitBotguardData: true
      },
      videoId: id
    };

    if (client) {
      data.client = client;
    }

    if (cpn) {
      data.cpn = cpn;
    }

    const response = await this.#session.http.fetch('/player', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Endpoint used to retrieve user mention suggestions.
   */
  async getUserMentionSuggestions(args: { input: string; }) {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const data = {
      input: args.input,
      client: 'ANDROID'
    };

    const response = await this.#session.http.fetch('/get_user_mention_suggestions', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.#wrap(response);
  }

  /**
   * Executes an API call.
   * @param action - endpoint
   * @param args - call arguments
   */
  async execute(action: string, args: { [key: string]: any; parse: true; protobuf?: false; serialized_data?: any }) : Promise<ParsedResponse>;
  async execute(action: string, args: { [key: string]: any; parse?: false; protobuf?: true; serialized_data?: any }) : Promise<ActionsResponse>;
  async execute(action: string, args: { [key: string]: any; parse?: boolean; protobuf?: boolean; serialized_data?: any }): Promise<ParsedResponse | ActionsResponse> {
    let data;

    if (!args.protobuf) {
      data = { ...args };

      if (Reflect.has(data, 'parse'))
        delete data.parse;

      if (Reflect.has(data, 'request'))
        delete data.request;

      if (Reflect.has(data, 'clientActions'))
        delete data.clientActions;

      if (Reflect.has(data, 'action')) {
        data.actions = [ data.action ];
        delete data.action;
      }

      if (Reflect.has(data, 'token')) {
        data.continuation = data.token;
        delete data.token;
      }
    } else {
      data = args.serialized_data;
    }

    const response = await this.#session.http.fetch(action, {
      method: 'POST',
      body: args.protobuf ? data : JSON.stringify(data),
      headers: {
        'Content-Type': args.protobuf ?
          'application/x-protobuf' :
          'application/json'
      }
    });

    if (args.parse) {
      return Parser.parseResponse(await response.json());
    }

    return this.#wrap(response, args.protobuf);
  }

  #needsLogin(id: string) {
    return [
      'FElibrary',
      'FEhistory',
      'FEsubscriptions',
      'SPaccount_notifications',
      'SPaccount_privacy',
      'SPtime_watched'
    ].includes(id);
  }
}

// TODO: maybe do this inferrance in a more elegant way
export default Actions;