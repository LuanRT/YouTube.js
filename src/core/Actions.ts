import type {
  IBrowseResponse,
  IESRChallengeResponse,
  IGetChallengeResponse,
  IGetNotificationsMenuResponse,
  IGetSessionTokenResponse,
  IGetWebReauthURLResponse,
  INextResponse,
  IParsedResponse,
  IPlayerResponse,
  IRawResponse,
  IResolveURLResponse,
  ISearchResponse,
  IUpdatedMetadataResponse
} from '../parser/index.js';
import { NavigateAction, Parser } from '../parser/index.js';
import { InnertubeError, u8ToBase64 } from '../utils/Utils.js';

import {
  UserInfo_DelegationContext,
  UserInfo_DelegationContext_RoleType_ChannelRoleType
} from '../../protos/generated/youtube/api/pfiinnertube/user_info.js';

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
  T extends '/att/esr' ? IESRChallengeResponse :
  T extends '/ars/grst' ? IGetSessionTokenResponse :
  T extends '/security/get_web_reauth_url' ? IGetWebReauthURLResponse :
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
      if (data?.client === 'WEB_CREATOR') {
        if (this.session.context.request) { // should just be true
          this.session.context.request.returnLogEntry = true;

          // TODO maybe I want to manually fetch the initial eats; but it seems that it doesn't matter to much...
          if (data?.eats) {
            this.session.context.request.eats = data?.eats;
            delete data?.eats;
          } else {
            // TODO put this in CONSTANTS
            this.session.context.request.eats = 'AeCS5zA8mwKJA3VzvwD--o2-ZsGbWYFt6LMN2EuOPJLQrg6MIuKxBpbf9WNlMPlARBhbMM-hSWg982LQDZEnOBj-yHFw1TDTzIUdINTExUA6U5lOgLtxyv6guJS9HQ==';
          }

          if (data.reauth_proof_token) {
            this.session.context.request.reauthRequestInfo = { encodedReauthProofToken: data.reauth_proof_token };
            delete data.reauth_proof_token;
          }

          if (data.session_token) {
            this.session.context.request.sessionInfo = { token: data.session_token };
            delete data.session_token;
          }

          if (data.attestation_response_data && Reflect.has(data.attestation_response_data, 'challenge') && Reflect.has(data.attestation_response_data, 'webResponse')) {
            this.session.context.request.attestationResponseData = data.attestation_response_data;
          }

          if (data.channel_id && this.session.context.user) {
            const delegation_context = {
              externalChannelId: data.channel_id,
              roleType: { channelRoleType: 'CREATOR_CHANNEL_ROLE_TYPE_OWNER' as const }
            };

            this.session.context.user.delegationContext = delegation_context;
            this.session.context.user.serializedDelegationContext = u8ToBase64(UserInfo_DelegationContext.encode({
              externalChannelId: delegation_context.externalChannelId,
              roleType: { channelRoleType: UserInfo_DelegationContext_RoleType_ChannelRoleType.CREATOR_CHANNEL_ROLE_TYPE_OWNER }
            }).finish());
          }
        }
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

    // YouTube Studio Web Context Cleanup
    {
      delete this.session.context.request?.returnLogEntry;
      delete this.session.context.request?.eats;
      delete this.session.context.request?.reauthRequestInfo;
      delete this.session.context.request?.sessionInfo;
      delete this.session.context.request?.attestationResponseData;
      delete this.session.context.user?.delegationContext;
      delete this.session.context.user?.serializedDelegationContext;
    }

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
      data: await response.json()
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