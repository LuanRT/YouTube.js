import type {
  IBrowseResponse,
  IGetChallengeResponse,
  IGetNotificationsMenuResponse,
  INextResponse,
  IParsedResponse,
  IPlayerResponse,
  IRawResponse,
  IResolveURLResponse,
  ISearchResponse,
  IUpdatedMetadataResponse
} from '../parser/index.js';
import { NavigateAction, Parser } from '../parser/index.js';
import { InnertubeError } from '../utils/Utils.js';

import type { Session } from './index.js';

export interface ApiResponse {
  success: boolean;
  status_code: number;
  data: IRawResponse;
}

export type InnertubeEndpoint =
  '/player'
  | '/search'
  | '/browse'
  | '/next'
  | '/reel'
  | '/updated_metadata'
  | '/notification/get_notification_menu'
  | '/att/get'
  | string;

export type ParsedResponse<T> =
  T extends '/player' ? IPlayerResponse :
    T extends '/search' ? ISearchResponse :
      T extends '/browse' ? IBrowseResponse :
        T extends '/next' ? INextResponse :
          T extends '/updated_metadata' ? IUpdatedMetadataResponse :
            T extends '/navigation/resolve_url' ? IResolveURLResponse :
              T extends '/notification/get_notification_menu' ? IGetNotificationsMenuResponse :
                T extends '/att/get' ? IGetChallengeResponse :
                  IParsedResponse;

export default class Actions {
  public session: Session;

  constructor(session: Session) {
    this.session = session;
  }

  /**
   * Makes calls to the playback tracking API.
   * @param url - The URL to call.
   * @param client - The client to use.
   * @param params - Call parameters.
   */
  async stats(url: string, client: { client_name: string; client_version: string }, params: {
    [key: string]: any
  }): Promise<Response> {
    const s_url = new URL(url);

    s_url.searchParams.set('ver', '2');
    s_url.searchParams.set('c', client.client_name.toLowerCase());
    s_url.searchParams.set('cbrver', client.client_version);
    s_url.searchParams.set('cver', client.client_version);

    for (const key of Object.keys(params)) {
      s_url.searchParams.set(key, params[key]);
    }

    return await this.session.http.fetch(s_url);
  }

  /**
   * Executes an API call.
   * @param endpoint - The endpoint to call.
   * @param args - Call arguments
   */
  async execute<T extends InnertubeEndpoint>(endpoint: T, args: {
    [key: string]: any;
    parse: true;
    protobuf?: false;
    serialized_data?: any;
    skip_auth_check?: boolean
  }): Promise<ParsedResponse<T>>;
  async execute<T extends InnertubeEndpoint>(endpoint: T, args?: {
    [key: string]: any;
    parse?: false;
    protobuf?: true;
    serialized_data?: any;
    skip_auth_check?: boolean
  }): Promise<ApiResponse>;
  async execute<T extends InnertubeEndpoint>(endpoint: T, args?: {
    [key: string]: any;
    parse?: boolean;
    protobuf?: boolean;
    serialized_data?: any;
    skip_auth_check?: boolean
  }): Promise<ParsedResponse<T> | ApiResponse> {
    let data;

    if (args && !args.protobuf) {
      data = { ...args };

      if (Reflect.has(data, 'browseId') && !args.skip_auth_check) {
        if (this.#needsLogin(data.browseId) && !this.session.logged_in)
          throw new InnertubeError('You must be signed in to perform this operation.');
      }

      if (Reflect.has(data, 'skip_auth_check'))
        delete data.skip_auth_check;

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

    const target_endpoint = Reflect.has(args || {}, 'override_endpoint') ? args?.override_endpoint : endpoint;

    const response = await this.session.http.fetch(target_endpoint, {
      method: 'POST',
      body: args?.protobuf ? data : JSON.stringify((data || {})),
      headers: {
        'Content-Type': args?.protobuf ?
          'application/x-protobuf' :
          'application/json'
      }
    });

    if (args?.parse) {
      let parsed_response = Parser.parseResponse<ParsedResponse<T>>(await response.json());

      // Handle redirects
      if (this.#isBrowse(parsed_response) && parsed_response.on_response_received_actions?.[0]?.type === 'navigateAction') {
        const navigate_action = parsed_response.on_response_received_actions.firstOfType(NavigateAction);
        if (navigate_action) {
          parsed_response = await navigate_action.endpoint.call(this, { parse: true });
        }
      }

      return parsed_response;
    }

    // Mimics the Axios API using Fetch's Response object.
    return {
      success: response.ok,
      status_code: response.status,
      data: JSON.parse(await response.text())
    };
  }

  #isBrowse(response: IParsedResponse): response is IBrowseResponse {
    return 'on_response_received_actions' in response;
  }

  #needsLogin(id: string) {
    return [
      'FElibrary',
      'FEhistory',
      'FEsubscriptions',
      'FEchannels',
      'FEplaylist_aggregation',
      'FEmusic_listening_review',
      'FEmusic_library_landing',
      'SPaccount_overview',
      'SPaccount_notifications',
      'SPaccount_privacy',
      'SPtime_watched'
    ].includes(id);
  }
}