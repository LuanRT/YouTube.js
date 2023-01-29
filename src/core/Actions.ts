import Parser, { ParsedResponse } from '../parser/index';
import { InnertubeError } from '../utils/Utils';
import type Session from './Session';

export interface ApiResponse {
  success: boolean;
  status_code: number;
  data: any;
}

export type ActionsResponse = Promise<ApiResponse>;

class Actions {
  #session: Session;

  constructor(session: Session) {
    this.#session = session;
  }

  get session(): Session {
    return this.#session;
  }

  /**
   * Mimmics the Axios API using Fetch's Response object.
   * @param response - The response object.
   */
  async #wrap(response: Response): Promise<ApiResponse> {
    return {
      success: response.ok,
      status_code: response.status,
      data: JSON.parse(await response.text())
    };
  }

  /**
   * Used to retrieve video info.
   * @param id - The video ID.
   * @param cpn - Content Playback Nonce.
   * @param client - The client to use.
   * @param playlist_id - The playlist ID.
   */
  async getVideoInfo(id: string, cpn?: string, client?: string, playlist_id?: string): Promise<ActionsResponse> {
    const data: Record<string, any> = {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          referer: 'https://www.youtube.com',
          currentUrl: `/watch?v=${id}`,
          autonavState: 'STATE_NONE',
          signatureTimestamp: this.#session.player?.sts || 0,
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

    if (playlist_id) {
      data.playlistId = playlist_id;
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
   * Makes calls to the playback tracking API.
   * @param url - The URL to call.
   * @param client - The client to use.
   * @param params - Call parameters.
   */
  async stats(url: string, client: { client_name: string; client_version: string }, params: { [key: string]: any }): Promise<Response> {
    const s_url = new URL(url);

    s_url.searchParams.set('ver', '2');
    s_url.searchParams.set('c', client.client_name.toLowerCase());
    s_url.searchParams.set('cbrver', client.client_version);
    s_url.searchParams.set('cver', client.client_version);

    for (const key of Object.keys(params)) {
      s_url.searchParams.set(key, params[key]);
    }

    const response = await this.#session.http.fetch(s_url);

    return response;
  }

  /**
   * Executes an API call.
   * @param action - The endpoint to call.
   * @param args - Call arguments
   */
  async execute(action: string, args: { [key: string]: any; parse: true; protobuf?: false; serialized_data?: any }) : Promise<ParsedResponse>;
  async execute(action: string, args?: { [key: string]: any; parse?: false; protobuf?: true; serialized_data?: any }) : Promise<ActionsResponse>;
  async execute(action: string, args?: { [key: string]: any; parse?: boolean; protobuf?: boolean; serialized_data?: any }): Promise<ParsedResponse | ActionsResponse> {
    let data;

    if (args && !args.protobuf) {
      data = { ...args };

      if (Reflect.has(data, 'browseId')) {
        if (this.#needsLogin(data.browseId) && !this.#session.logged_in)
          throw new InnertubeError('You must be signed in to perform this operation.');
      }

      if (Reflect.has(data, 'override_endpoint'))
        delete data.override_endpoint;

      if (Reflect.has(data, 'parse'))
        delete data.parse;

      if (Reflect.has(data, 'request'))
        delete data.request;

      if (Reflect.has(data, 'clientActions'))
        delete data.clientActions;

      if (Reflect.has(data, 'settingItemIdForClient'))
        delete data.settingItemIdForClient;

      if (Reflect.has(data, 'action')) {
        data.actions = [ data.action ];
        delete data.action;
      }

      if (Reflect.has(data, 'boolValue')) {
        data.newValue = { boolValue: data.boolValue };
        delete data.boolValue;
      }

      if (Reflect.has(data, 'token')) {
        data.continuation = data.token;
        delete data.token;
      }

      if (data?.client === 'YTMUSIC') {
        data.isAudioOnly = true;
      }
    } else if (args) {
      data = args.serialized_data;
    }

    const endpoint = Reflect.has(args || {}, 'override_endpoint') ? args?.override_endpoint : action;

    const response = await this.#session.http.fetch(endpoint, {
      method: 'POST',
      body: args?.protobuf ? data : JSON.stringify((data || {})),
      headers: {
        'Content-Type': args?.protobuf ?
          'application/x-protobuf' :
          'application/json'
      }
    });

    if (args?.parse) {
      return Parser.parseResponse(await response.json());
    }

    return this.#wrap(response);
  }

  #needsLogin(id: string) {
    return [
      'FElibrary',
      'FEhistory',
      'FEsubscriptions',
      'FEmusic_listening_review',
      'FEmusic_library_landing',
      'SPaccount_overview',
      'SPaccount_notifications',
      'SPaccount_privacy',
      'SPtime_watched'
    ].includes(id);
  }
}

export default Actions;