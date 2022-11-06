import Session from './Session';
import Constants from '../utils/Constants';
import { OAuthError, uuidv4 } from '../utils/Utils';

export interface Credentials {
  /**
   * Token used to sign in.
   */
  access_token: string;
  /**
   * Token used to get a new access token.
   */
  refresh_token: string;
  /**
   * Access token's expiration date, which is usually 24hrs-ish.
   */
  expires: Date;
}

// TODO: actual type info for this.
export type OAuthAuthPendingData = any;

export type OAuthAuthEventHandler = (data: {
  credentials: Credentials;
  status: 'SUCCESS';
}) => any;

export type OAuthAuthPendingEventHandler = (data: OAuthAuthPendingData) => any;
export type OAuthAuthErrorEventHandler = (err: OAuthError) => any;

class OAuth {
  #identity?: Record<string, string>;
  #session: Session;
  #credentials?: Credentials;
  #polling_interval = 5;

  constructor(session: Session) {
    this.#session = session;
  }

  /**
   * Starts the auth flow in case no valid credentials are available.
   */
  async init(credentials?: Credentials) {
    this.#credentials = credentials;

    if (this.validateCredentials()) {
      if (!this.has_access_token_expired)
        this.#session.emit('auth', {
          credentials: this.#credentials,
          status: 'SUCCESS'
        });
    } else if (!(await this.#loadCachedCredentials())) {
      await this.#getUserCode();
    }
  }

  async cacheCredentials() {
    const encoder = new TextEncoder();
    const data = encoder.encode(JSON.stringify(this.#credentials));
    await this.#session.cache?.set('youtubei_oauth_credentials', data.buffer);
  }

  async #loadCachedCredentials() {
    const data = await this.#session.cache?.get('youtubei_oauth_credentials');
    if (!data) return false;

    const decoder = new TextDecoder();
    const credentials = JSON.parse(decoder.decode(data));

    this.#credentials = {
      access_token: credentials.access_token,
      refresh_token: credentials.refresh_token,
      expires: new Date(credentials.expires)
    };

    this.#session.emit('auth', {
      credentials: this.#credentials,
      status: 'SUCCESS'
    });

    return true;
  }

  async removeCache() {
    await this.#session.cache?.remove('youtubei_oauth_credentials');
  }

  /**
   * Asks the server for a user code and verification URL.
   */
  async #getUserCode() {
    this.#identity = await this.#getClientIdentity();

    const data = {
      client_id: this.#identity.client_id,
      scope: Constants.OAUTH.SCOPE,
      device_id: uuidv4(),
      model_name: Constants.OAUTH.MODEL_NAME
    };

    const response = await this.#session.http.fetch_function(new URL('/o/oauth2/device/code', Constants.URLS.YT_BASE), {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const response_data = await response.json();

    this.#session.emit('auth-pending', response_data);
    this.#polling_interval = response_data.interval;
    this.#startPolling(response_data.device_code);
  }

  /**
   * Polls the authorization server until access is granted by the user.
   */
  #startPolling(device_code: string) {
    const poller = setInterval(async () => {
      const data = {
        ...this.#identity,
        code: device_code,
        grant_type: Constants.OAUTH.GRANT_TYPE
      };

      try {
        const response = await this.#session.http.fetch_function(new URL('/o/oauth2/token', Constants.URLS.YT_BASE), {
          body: JSON.stringify(data),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const response_data = await response.json();

        if (response_data.error) {
          switch (response_data.error) {
            case 'access_denied':
              this.#session.emit('auth-error', new OAuthError('Access was denied.', { status: 'ACCESS_DENIED' }));
              break;
            case 'expired_token':
              this.#session.emit('auth-error', new OAuthError('The device code has expired, restarting auth flow.', { status: 'DEVICE_CODE_EXPIRED' }));
              clearInterval(poller);
              this.#getUserCode();
              break;
            default:
              break;
          }
          return;
        }

        const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1000);

        this.#credentials = {
          access_token: response_data.access_token,
          refresh_token: response_data.refresh_token,
          expires: expiration_date
        };

        this.#session.emit('auth', {
          credentials: this.#credentials,
          status: 'SUCCESS'
        });

        clearInterval(poller);
      } catch (err) {
        clearInterval(poller);
        return this.#session.emit('auth-error', new OAuthError('Could not obtain user code.', { status: 'FAILED', error: err }));
      }
    }, this.#polling_interval * 1000);
  }

  /**
   * Refresh access token if the same has expired.
   */
  async refreshIfRequired() {
    if (this.has_access_token_expired) {
      await this.#refreshAccessToken();
    }
  }

  async #refreshAccessToken() {
    if (!this.#credentials) return;
    this.#identity = await this.#getClientIdentity();

    const data = {
      ...this.#identity,
      refresh_token: this.#credentials.refresh_token,
      grant_type: 'refresh_token'
    };

    const response = await this.#session.http.fetch_function(new URL('/o/oauth2/token', Constants.URLS.YT_BASE), {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const response_data = await response.json();
    const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1000);

    this.#credentials = {
      access_token: response_data.access_token,
      refresh_token: response_data.refresh_token || this.#credentials.refresh_token,
      expires: expiration_date
    };

    this.#session.emit('update-credentials', {
      credentials: this.#credentials,
      status: 'SUCCESS'
    });
  }

  async revokeCredentials() {
    if (!this.#credentials) return;
    await this.removeCache();
    return this.#session.http.fetch_function(new URL(`/o/oauth2/revoke?token=${encodeURIComponent(this.#credentials.access_token)}`, Constants.URLS.YT_BASE), {
      method: 'post'
    });
  }

  /**
   * Retrieves client identity from YouTube TV.
   */
  async #getClientIdentity() {
    const response = await this.#session.http.fetch_function(new URL('/tv', Constants.URLS.YT_BASE), { headers: Constants.OAUTH.HEADERS });

    const response_data = await response.text();
    const url_body = Constants.OAUTH.REGEX.AUTH_SCRIPT.exec(response_data)?.[1];

    if (!url_body)
      throw new OAuthError('Could not obtain script url.', { status: 'FAILED' });

    const script = await this.#session.http.fetch(url_body, { baseURL: Constants.URLS.YT_BASE });

    const client_identity = (await script.text())
      .replace(/\n/g, '')
      .match(Constants.OAUTH.REGEX.CLIENT_IDENTITY);

    const groups = client_identity?.groups;

    if (!groups)
      throw new OAuthError('Could not obtain client identity.', { status: 'FAILED' });

    return groups;
  }

  get credentials() {
    return this.#credentials;
  }

  get has_access_token_expired(): boolean {
    const timestamp = this.#credentials ? new Date(this.#credentials.expires).getTime() : -Infinity;
    return new Date().getTime() > timestamp;
  }

  validateCredentials(): this is this & { credentials: Credentials } {
    return this.#credentials &&
      Reflect.has(this.#credentials, 'access_token') &&
      Reflect.has(this.#credentials, 'refresh_token') &&
      Reflect.has(this.#credentials, 'expires') || false;
  }
}

export default OAuth;