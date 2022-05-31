'use strict';

const Constants = require('../utils/Constants');
const Uuid = require('uuid');

/** @namespace */
class OAuth {
  /**
   * @type {AxiosInstance}
   */
  #axios;
  #oauth_code_url = `${Constants.URLS.YT_BASE}/o/oauth2/device/code`;
  #oauth_token_url = `${Constants.URLS.YT_BASE}/o/oauth2/token`;
  #oauth_revoke_url = `${Constants.URLS.YT_BASE}/o/oauth2/revoke`;
  
  #auth_info = {};
  #polling_interval = 5;
  #ev = null;
  
  /**
   * @param {EventEmitter} ev
   * @param {AxiosInstance} axios
   * @constructor
   */
  constructor(ev, axios) {
    this.#ev = ev;
    this.#axios = axios;
  }
  
  /**
   * Starts the auth flow in case no valid credentials are available.
   * @returns {Promise.<void>}
   */
  async init(auth_info) {
    this.#auth_info = auth_info;
    if (!auth_info.access_token) {
      this.#requestUserCode();
    }
  }

  /**
   * Asks the OAuth server for a user code
   * and verification URL.
   * 
   * @returns {Promise.<void>}
   */
  async #requestUserCode() {
    const identity = await this.#getClientIdentity();

    this.client_id = identity.id;
    this.client_secret = identity.secret;

    const data = {
      client_id: this.client_id,
      scope: Constants.OAUTH.SCOPE,
      device_id: Uuid.v4(),
      model_name: Constants.OAUTH.MODEL_NAME
    };

    const response = await this.#axios.post(this.#oauth_code_url, JSON.stringify(data), Constants.OAUTH.HEADERS).catch((error) => error);
    if (response instanceof Error) return this.#ev.emit('auth', { error: 'Could not obtain user code.', status: 'FAILED' });

    this.#ev.emit('auth', {
      code: response.data.user_code,
      status: 'AUTHORIZATION_PENDING',
      expires_in: response.data.expires_in,
      verification_url: response.data.verification_url
    });

    this.#polling_interval = response.data.interval;

    this.#waitForAuth(response.data.device_code);
  }

  /**
   * Waits for sign-in authorization.
   *
   * @param {string} device_code - Client's device code.
   * @returns 
   */
  #waitForAuth(device_code) {
    const data = {
      client_id: this.client_id,
      client_secret: this.client_secret,
      code: device_code,
      grant_type: Constants.OAUTH.GRANT_TYPE
    };

    setTimeout(async () => {
      const response = await this.#axios.post(this.#oauth_token_url, JSON.stringify(data), Constants.OAUTH.HEADERS).catch((error) => error);
      if (response instanceof Error) return this.#ev.emit('auth', { error: 'Could not get authentication token.', status: 'FAILED' });

      if (response.data.error) {
        switch (response.data.error) {
          case 'slow_down':
          case 'authorization_pending':
            this.#waitForAuth(device_code);
            break;
          case 'access_denied':
            this.#ev.emit('auth', {
              error: 'Access was denied.',
              status: 'ACCESS_DENIED'
            });
            break;
          case 'expired_token':
            this.#ev.emit('auth', {
              error: 'The user code has expired, requesting a new one.',
              status: 'DEVICE_CODE_EXPIRED'
            });
            this.#requestUserCode();
            break;
          default:
        }
      } else {
        const expiration_date = new Date(new Date().getTime() + response.data.expires_in * 1000);

        const credentials = {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
          expires: expiration_date,
        };

        this.#auth_info = credentials;

        this.#ev.emit('auth', {
          credentials,
          status: 'SUCCESS'
        });
      }
    }, 1000 * this.#polling_interval);
  }
  
  /**
   * Refreshes the access token if necessary.
   * @returns {Promise.<void>}
   */
  async checkTokenValidity() {
    if (this.shouldRefreshToken()) {
      await this.#refreshAccessToken();
    }
  }
  
  /**
   * Gets a new access token using a refresh token.
   * @returns {Promise.<void>}
   */
  async #refreshAccessToken() {
    const identity = await this.#getClientIdentity();

    const data = {
      client_id: identity.id,
      client_secret: identity.secret,
      refresh_token: this.#auth_info.refresh_token,
      grant_type: 'refresh_token',
    };

    const response = await this.#axios.post(this.#oauth_token_url, JSON.stringify(data), Constants.OAUTH.HEADERS).catch((error) => error);

    if (response instanceof Error) 
      return this.#ev.emit('update-credentials', {
        error: 'Could not refresh access token.',
        status: 'FAILED'
      });

    const expiration_date = new Date(new Date().getTime() + response.data.expires_in * 1000);

    const credentials = {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token || this.#auth_info.refresh_token,
      expires: expiration_date,
    };

    this.#auth_info = credentials;
    
    this.#ev.emit('update-credentials', {
      credentials,
      status: 'SUCCESS'
    });
  }
  
  /**
   * Revokes access token (note that the refresh token will also be revoked).
   * @returns {Promise.<void>}
   */
  async revokeAccessToken() {
    const response = await this.#axios.post(`${this.#oauth_revoke_url}?token=${this.getAccessToken()}`, Constants.OAUTH.HEADERS).catch((error) => error);
    return {
      success: !(response instanceof Error),
      status_code: response.status || 0
    }
  }

  /**
   * Gets client identity data.
   * @returns {Promise.<{ id: string; secret: string }>} 
   */
  async #getClientIdentity() {
    // This request is made to get the auth script url, hard-coding it isn't viable as it changes overtime.
    const yttv_response = await this.#axios.get(`${Constants.URLS.YT_BASE}/tv`, Constants.OAUTH.HEADERS).catch((error) => error);
    if (yttv_response instanceof Error) throw new Error(`Could not extract client identity: ${yttv_response.message}`);

    // Here we download the script and extract the necessary data to proceed with the auth flow.
    const url_body = Constants.OAUTH.REGEX.AUTH_SCRIPT.exec(yttv_response.data)[1];
    const script_url = `${Constants.URLS.YT_BASE}/${url_body}`;

    const response = await this.#axios.get(script_url).catch((error) => error);
    if (response instanceof Error) throw new Error(`Could not extract client identity: ${response.message}`);

    const client_identity = response.data.replace(/\n/g, '').match(Constants.OAUTH.REGEX.CLIENT_IDENTITY);
    return client_identity.groups;
  }
  
  /**
   * Returns the access token.
   * @returns {string}
   */
  getAccessToken() {
    return this.#auth_info.access_token;
  }
  
  /**
   * Returns the refresh token.
   * @returns {string}
   */
  getRefreshToken() {
    return this.#auth_info.refresh_token;
  }
  
  /**
   * Checks if the auth info format is valid.
   * @returns {boolean} true | false
   */
  isValidAuthInfo() {
    return this.#auth_info.hasOwnProperty('access_token')
      && this.#auth_info.hasOwnProperty('refresh_token')
      && this.#auth_info.hasOwnProperty('expires');
  }

  /**
   * Checks access token validity.
   * @returns {boolean} true | false
   */
  shouldRefreshToken() {
    const timestamp = new Date(this.#auth_info.expires).getTime();
    return new Date().getTime() > timestamp;
  }
}

module.exports = OAuth;