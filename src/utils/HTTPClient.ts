import * as Constants from './Constants.js';

import {
  Platform,
  generateSidAuth,
  InnertubeError,
  getCookie
} from './Utils.js';

import type { Context, Session } from '../core/index.js';
import type { FetchFunction } from '../types/index.js';

export interface HTTPClientInit {
  baseURL?: string;
}

export default class HTTPClient {
  #session: Session;
  readonly #cookie?: string;
  readonly #fetch: FetchFunction;

  constructor(session: Session, cookie?: string, fetch?: FetchFunction) {
    this.#session = session;
    this.#cookie = cookie;
    this.#fetch = fetch || Platform.shim.fetch;
  }

  get fetch_function(): FetchFunction {
    return this.#fetch;
  }

  async fetch(
    input: URL | Request | string,
    init?: RequestInit & HTTPClientInit
  ): Promise<Response> {
    const session = this.#session;

    const innertube_url = Constants.URLS.API.PRODUCTION_1 + session.api_version;
    const baseURL = init?.baseURL || innertube_url;

    const request_url =
      typeof input === 'string' ?
        (!baseURL.endsWith('/') && !input.startsWith('/')) ?
          new URL(`${baseURL}/${input}`) :
          new URL(baseURL + input) :
        input instanceof URL ?
          input : new URL(input.url, baseURL);

    const headers =
      init?.headers ||
      (input instanceof Platform.shim.Request ? input.headers : new Platform.shim.Headers()) ||
      new Platform.shim.Headers();

    const body = init?.body || (input instanceof Platform.shim.Request ? input.body : undefined);

    const request_headers = new Platform.shim.Headers(headers);

    request_headers.set('Accept', '*/*');
    request_headers.set('Accept-Language', '*');
    request_headers.set('X-Goog-Visitor-Id', session.context.client.visitorData || '');
    request_headers.set('X-Youtube-Client-Version', session.context.client.clientVersion || '');

    const client_name_id = Constants.CLIENT_NAME_IDS[session.context.client.clientName as keyof typeof Constants.CLIENT_NAME_IDS];

    if (client_name_id) {
      request_headers.set('X-Youtube-Client-Name', client_name_id);
    }

    if (Platform.shim.server) {
      request_headers.set('User-Agent', session.user_agent || '');
      request_headers.set('Origin', request_url.origin);
    }

    request_url.searchParams.set('prettyPrint', 'false');
    request_url.searchParams.set('alt', 'json');

    const content_type = request_headers.get('Content-Type');

    let request_body = body;
    let is_web_kids = false;

    const is_innertube_req =
      baseURL === innertube_url ||
      baseURL === Constants.URLS.YT_UPLOAD;

    // Copy context into payload when possible
    if (content_type === 'application/json' && is_innertube_req && (typeof body === 'string')) {
      const json = JSON.parse(body);

      const n_body = {
        ...json,
        // Deep copy since we're going to be modifying it
        context: JSON.parse(JSON.stringify(session.context)) as Context
      };

      this.#adjustContext(n_body.context, n_body.client);
      request_headers.set('X-Youtube-Client-Version', n_body.context.client.clientVersion);

      const client_name_id = Constants.CLIENT_NAME_IDS[n_body.context.client.clientName as keyof typeof Constants.CLIENT_NAME_IDS];

      if (client_name_id) {
        request_headers.set('X-Youtube-Client-Name', client_name_id);
      }

      delete n_body.client;

      if (n_body.context.client.clientName === 'ANDROID' || n_body.context.client.clientName === 'ANDROID_MUSIC') {
        request_headers.set('User-Agent', Constants.CLIENTS.ANDROID.USER_AGENT);
        request_headers.set('X-GOOG-API-FORMAT-VERSION', '2');
      } else if (n_body.context.client.clientName === 'iOS') {
        request_headers.set('User-Agent', Constants.CLIENTS.IOS.USER_AGENT);
      }

      is_web_kids = n_body.context.client.clientName === 'WEB_KIDS';
      request_body = JSON.stringify(n_body);
    } else if (content_type === 'application/x-protobuf') {
      // Assume it is always an Android request.
      if (Platform.shim.server) {
        request_headers.set('User-Agent', Constants.CLIENTS.ANDROID.USER_AGENT);
        request_headers.set('X-GOOG-API-FORMAT-VERSION', '2');
        request_headers.delete('X-Youtube-Client-Version');
      }
    }

    // Authenticate (NOTE: YouTube Kids does not support regular bearer tokens)
    if (session.logged_in && is_innertube_req && !is_web_kids) {
      const oauth = session.oauth;

      if (oauth.oauth2_tokens) {
        if (oauth.shouldRefreshToken()) {
          await oauth.refreshAccessToken();
        }

        request_headers.set('Authorization', `Bearer ${oauth.oauth2_tokens.access_token}`);
      }

      const cookie = this.#cookie;

      if (cookie) {
        const sapisid = getCookie(cookie, 'SAPISID');

        if (sapisid) {
          request_headers.set('Authorization', await generateSidAuth(sapisid));
          request_headers.set('X-Goog-Authuser', session.account_index.toString());
          if (session.context.user.onBehalfOfUser)
            request_headers.set('X-Goog-PageId', session.context.user.onBehalfOfUser);
        }

        request_headers.set('Cookie', cookie);
      }
    }

    const request = new Platform.shim.Request(request_url, input instanceof Platform.shim.Request ? input : init);

    const response = await this.#fetch(request, {
      body: request_body,
      headers: request_headers,
      redirect: input instanceof Platform.shim.Request ? input.redirect : init?.redirect || 'follow',
      ...(Platform.shim.runtime !== 'cf-worker' ? { credentials: 'include' } : {})
    });

    // Check if 2xx
    if (response.ok) {
      return response;
    }
    throw new InnertubeError(`Request to ${response.url} failed with status ${response.status}`, await response.text());
  }

  #adjustContext(ctx: Context, client?: string): void {
    if (!client)
      return;

    if (!Constants.SUPPORTED_CLIENTS.includes(client.toUpperCase()))
      throw new InnertubeError(`Invalid client: ${client}`, {
        available_innertube_clients: Constants.SUPPORTED_CLIENTS
      });

    if (
      client === 'ANDROID' ||
      client === 'YTMUSIC_ANDROID' ||
      client === 'YTMUSIC_ANDROID' ||
      client === 'YTSTUDIO_ANDROID'
    ) {
      ctx.client.androidSdkVersion = Constants.CLIENTS.ANDROID.SDK_VERSION;
      ctx.client.userAgent = Constants.CLIENTS.ANDROID.USER_AGENT;
      ctx.client.osName = 'Android';
      ctx.client.osVersion = '13';
      ctx.client.platform = 'MOBILE';
    }

    switch (client.toUpperCase()) {
      case 'MWEB':
        ctx.client.clientVersion = Constants.CLIENTS.MWEB.VERSION;
        ctx.client.clientName = Constants.CLIENTS.MWEB.NAME;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.platform = 'MOBILE';
        break;
      case 'IOS':
        ctx.client.deviceMake = 'Apple';
        ctx.client.deviceModel = Constants.CLIENTS.IOS.DEVICE_MODEL;
        ctx.client.clientVersion = Constants.CLIENTS.IOS.VERSION;
        ctx.client.clientName = Constants.CLIENTS.IOS.NAME;
        ctx.client.platform = 'MOBILE';
        ctx.client.osName = Constants.CLIENTS.IOS.OS_NAME;
        ctx.client.osVersion = Constants.CLIENTS.IOS.OS_VERSION;
        delete ctx.client.browserName;
        delete ctx.client.browserVersion;
        break;
      case 'YTMUSIC':
        ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC.VERSION;
        ctx.client.clientName = Constants.CLIENTS.YTMUSIC.NAME;
        break;
      case 'ANDROID':
        ctx.client.clientVersion = Constants.CLIENTS.ANDROID.VERSION;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.clientName = Constants.CLIENTS.ANDROID.NAME;
        break;
      case 'YTMUSIC_ANDROID':
        ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC_ANDROID.VERSION;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.clientName = Constants.CLIENTS.YTMUSIC_ANDROID.NAME;
        break;
      case 'YTSTUDIO_ANDROID':
        ctx.client.clientVersion = Constants.CLIENTS.YTSTUDIO_ANDROID.VERSION;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.clientName = Constants.CLIENTS.YTSTUDIO_ANDROID.NAME;
        break;
      case 'TV': {
        ctx.client.clientVersion = Constants.CLIENTS.TV.VERSION;
        ctx.client.clientName = Constants.CLIENTS.TV.NAME;
        ctx.client.userAgent = Constants.CLIENTS.TV.USER_AGENT;
        break;
      }
      case 'TV_EMBEDDED':
        ctx.client.clientName = Constants.CLIENTS.TV_EMBEDDED.NAME;
        ctx.client.clientVersion = Constants.CLIENTS.TV_EMBEDDED.VERSION;
        ctx.client.clientScreen = 'EMBED';
        ctx.thirdParty = { embedUrl: Constants.URLS.YT_BASE };
        break;
      case 'YTKIDS':
        ctx.client.clientVersion = Constants.CLIENTS.WEB_KIDS.VERSION;
        ctx.client.clientName = Constants.CLIENTS.WEB_KIDS.NAME;
        ctx.client.kidsAppInfo = { // TODO: Make this customizable
          categorySettings: {
            enabledCategories: [
              'approved_for_you',
              'black_joy',
              'camp',
              'collections',
              'earth',
              'explore',
              'favorites',
              'gaming',
              'halloween',
              'hero',
              'learning',
              'move',
              'music',
              'reading',
              'shared_by_parents',
              'shows',
              'soccer',
              'sports',
              'spotlight',
              'winter'
            ]
          },
          contentSettings: {
            corpusPreference: 'KIDS_CORPUS_PREFERENCE_YOUNGER',
            kidsNoSearchMode: 'YT_KIDS_NO_SEARCH_MODE_OFF'
          }
        };
        break;
      case 'WEB_EMBEDDED':
        ctx.client.clientName = Constants.CLIENTS.WEB_EMBEDDED.NAME;
        ctx.client.clientVersion = Constants.CLIENTS.WEB_EMBEDDED.VERSION;
        ctx.client.clientScreen = 'EMBED';
        ctx.thirdParty = { embedUrl: Constants.URLS.GOOGLE_SEARCH_BASE };
        break;
      case 'WEB_CREATOR':
        ctx.client.clientName = Constants.CLIENTS.WEB_CREATOR.NAME;
        ctx.client.clientVersion = Constants.CLIENTS.WEB_CREATOR.VERSION;
        break;
      default:
        break;
    }
  }
}
