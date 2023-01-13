import Session, { Context } from '../core/Session';
import Constants from './Constants';
import { generateSidAuth, getRandomUserAgent, getStringBetweenStrings, InnertubeError, isServer } from './Utils';

export type FetchFunction = typeof fetch;

export interface HTTPClientInit {
  baseURL?: string;
}

export default class HTTPClient {
  #session: Session;
  #cookie?: string;
  #fetch: FetchFunction;

  constructor(session: Session, cookie?: string, fetch?: FetchFunction) {
    this.#session = session;
    this.#cookie = cookie;
    this.#fetch = fetch || globalThis.fetch;
  }

  get fetch_function(): FetchFunction {
    return this.#fetch;
  }

  async fetch(
    input: URL | Request | string,
    init?: RequestInit & HTTPClientInit
  ): Promise<Response> {
    const innertube_url = Constants.URLS.API.PRODUCTION_1 + this.#session.api_version;
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
      (input instanceof Request ? input.headers : new Headers()) ||
      new Headers();

    const body = init?.body || (input instanceof Request ? input.body : undefined);

    const request_headers = new Headers(headers);

    request_headers.set('Accept', '*/*');
    request_headers.set('Accept-Language', '*');
    request_headers.set('x-goog-visitor-id', this.#session.context.client.visitorData || '');
    request_headers.set('x-origin', request_url.origin);
    request_headers.set('x-youtube-client-version', this.#session.context.client.clientVersion || '');

    if (isServer()) {
      request_headers.set('User-Agent', getRandomUserAgent('desktop'));
      request_headers.set('origin', request_url.origin);
    }

    request_url.searchParams.set('key', this.#session.key);
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
        // Deep copy since we're gonna be modifying it
        context: JSON.parse(JSON.stringify(this.#session.context))
      };

      this.#adjustContext(n_body.context, n_body.client);
      request_headers.set('x-youtube-client-version', n_body.context.client.clientVersion);

      delete n_body.client;

      is_web_kids = n_body.context.client.clientName === 'WEB_KIDS';
      request_body = JSON.stringify(n_body);
    }

    // Authenticate (NOTE: YouTube Kids does not support regular bearer tokens)
    if (this.#session.logged_in && is_innertube_req && !is_web_kids) {
      const oauth = this.#session.oauth;

      if (oauth.validateCredentials()) {
        await oauth.refreshIfRequired();

        request_headers.set('authorization', `Bearer ${oauth.credentials.access_token}`);

        // Remove API key as it is not required when using oauth.
        request_url.searchParams.delete('key');
      }

      if (this.#cookie) {
        const papisid = getStringBetweenStrings(this.#cookie, 'PAPISID=', ';');

        if (papisid) {
          request_headers.set('authorization', await generateSidAuth(papisid));
          request_headers.set('x-goog-authuser', this.#session.account_index.toString());
        }

        request_headers.set('cookie', this.#cookie);
      }
    }

    const request = new Request(request_url, input instanceof Request ? input : init);

    const response = await this.#fetch(request, {
      body: request_body,
      headers: request_headers,
      credentials: 'include',
      redirect: input instanceof Request ? input.redirect : init?.redirect || 'follow'
    });

    // Check if 2xx
    if (response.ok) {
      return response;
    } throw new InnertubeError(`Request to ${response.url} failed with status ${response.status}`, await response.text());
  }

  #adjustContext(ctx: Context, client: string): void {
    switch (client) {
      case 'YTMUSIC':
        ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC.VERSION;
        ctx.client.clientName = Constants.CLIENTS.YTMUSIC.NAME;
        break;
      case 'ANDROID':
        ctx.client.clientVersion = Constants.CLIENTS.ANDROID.VERSION;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.clientName = Constants.CLIENTS.ANDROID.NAME;
        ctx.client.androidSdkVersion = Constants.CLIENTS.ANDROID.SDK_VERSION;
        break;
      case 'YTMUSIC_ANDROID':
        ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC_ANDROID.VERSION;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.clientName = Constants.CLIENTS.YTMUSIC_ANDROID.NAME;
        ctx.client.androidSdkVersion = Constants.CLIENTS.ANDROID.SDK_VERSION;
        break;
      case 'YTSTUDIO_ANDROID':
        ctx.client.clientVersion = Constants.CLIENTS.YTSTUDIO_ANDROID.VERSION;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.clientName = Constants.CLIENTS.YTSTUDIO_ANDROID.NAME;
        ctx.client.androidSdkVersion = Constants.CLIENTS.ANDROID.SDK_VERSION;
        break;
      case 'TV_EMBEDDED':
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
      default:
        break;
    }
  }
}
