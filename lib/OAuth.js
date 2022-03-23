'use strict';

const Axios = require('axios');
const Constants = require('./Constants');
const EventEmitter = require('events');
const Uuid = require('uuid');

class OAuth extends EventEmitter {
  constructor(auth_info) {
    super();
    this.auth_info = auth_info;
    this.refresh_interval = 5;

    this.oauth_code_url = `${Constants.URLS.YT_BASE}/o/oauth2/device/code`;
    this.oauth_token_url = `${Constants.URLS.YT_BASE}/o/oauth2/token`;
    
    this.model_name = Constants.OAUTH.MODEL_NAME;
    this.grant_type = Constants.OAUTH.GRANT_TYPE;
    this.scope = Constants.OAUTH.SCOPE;

    this.auth_script_regex = /<script id=\"base-js\" src=\"(.*?)\" nonce=".*?"><\/script>/;
    this.identity_regex = /.+?={};var .+?={clientId:\"(?<id>.+?)\",.+?:\"(?<secret>.+?)\"},/;

    if (auth_info.access_token) return;
    this.#requestAuthCode();
  }

  /**
   * Asks the OAuth server for an auth code.
   * @returns {Promise.<void>}
   */
  async #requestAuthCode() {
    const identity = await this.#getClientIdentity();

    this.client_id = identity.id;
    this.client_secret = identity.secret;

    const data = {
      client_id: this.client_id,
      scope: this.scope,
      device_id: Uuid.v4(),
      model_name: this.model_name
    };

    const response = await Axios.post(this.oauth_code_url, JSON.stringify(data), Constants.OAUTH.HEADERS).catch((error) => error);

    if (response instanceof Error)
      return this.emit('auth', {
        error: 'Could not get auth code.',
        status: 'FAILED'
      });

    this.emit('auth', {
      code: response.data.user_code,
      status: 'AUTHORIZATION_PENDING',
      expires_in: response.data.expires_in,
      verification_url: response.data.verification_url
    });

    this.refresh_interval = response.data.interval;

    this.#waitForAuth(response.data.device_code);
  }

  /**
   * Waits for sign-in authorization.
   *
   * @param {string} device_code Client's device code.
   * @returns 
   */
  #waitForAuth(device_code) {
    const data = {
      client_id: this.client_id,
      client_secret: this.client_secret,
      code: device_code,
      grant_type: this.grant_type
    };

    setTimeout(async () => {
      const response = await Axios.post(this.oauth_token_url, JSON.stringify(data), Constants.OAUTH.HEADERS).catch((error) => error);
      if (response instanceof Error)
        return this.emit('auth', {
          error: 'Could not get authentication token.',
          status: 'FAILED'
        });

      if (response.data.error) {
        switch (response.data.error) {
          case 'slow_down':
          case 'authorization_pending':
            this.#waitForAuth(device_code);
            break;
          case 'access_denied':
            this.emit('auth', {
              error: 'Access was denied.',
              status: 'ACCESS_DENIED'
            });
            break;
          case 'expired_token':
            this.emit('auth', {
              error: 'The device code has expired, requesting a new one.',
              status: 'DEVICE_CODE_EXPIRED'
            });
            this.#requestAuthCode();
            break;
          default:
        }
      } else {
        const expiration_date = new Date(new Date().getTime() + response.data.expires_in * 1000);

        this.emit('auth', {
          credentials: {
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
            expires: expiration_date,
          },
          token_type: response.data.token_type,
          status: 'SUCCESS'
        });
      }
    }, 1000 * this.refresh_interval);
  }

  /**
   * Gets a new access token using a refresh token.
   * @returns {Promise.<{ credentials: { access_token: string; refresh_token: string; expires: Date }; status: string }>}
   */
  async refreshAccessToken() {
    const identity = await this.#getClientIdentity();

    const data = {
      client_id: identity.id,
      client_secret: identity.secret,
      refresh_token: this.auth_info.refresh_token,
      grant_type: 'refresh_token',
    };

    const response = await Axios.post(this.oauth_token_url, JSON.stringify(data), Constants.OAUTH.HEADERS).catch((error) => error);
    if (response instanceof Error) {
      this.emit('auth', {
        error: 'Could not refresh access token.',
        status: 'FAILED'
      });

      return {
        credentials: {
          access_token: this.auth_info.access_token,
          refresh_token: this.auth_info.refresh_token,
          expires: this.auth_info.expires
        },
        status: 'FAILED'
      };
    }

    const expiration_date = new Date(new Date().getTime() + response.data.expires_in * 1000);

    return {
      credentials: {
        refresh_token: this.auth_info.refresh_token,
        access_token: response.data.access_token,
        expires: expiration_date
      },
      token_type: response.data.token_type,
      status: 'SUCCESS'
    };
  }

  /**
   * Gets client identity data.
   * @returns {Promise.<{ id: string; secret: string }>} 
   */
  async #getClientIdentity() {
    // This request is made to get the auth script url, hard-coding it isn't viable as it changes overtime.
    const yttv_response = await Axios.get(`${Constants.URLS.YT_BASE}/tv`, Constants.OAUTH.HEADERS).catch((error) => error);
    if (yttv_response instanceof Error) throw new Error(`Could not extract client identity: ${yttv_response.message}`);

    // Here we download the script and extract the necessary data to proceed with the auth flow.
    const url_body = this.auth_script_regex.exec(yttv_response.data)[1];
    const script_url = `${Constants.URLS.YT_BASE}/${url_body}`;
    
    const response = await Axios.get(script_url, Constants.DEFAULT_HEADERS).catch((error) => error);
    if (response instanceof Error) throw new Error(`Could not extract client identity: ${response.message}`);

    const client_identity = response.data.replace(/\n/g, '').match(this.identity_regex);
    return client_identity.groups;
  }

  /**
   * Checks access token validity.
   * @returns {boolean} true | false
   */
  isTokenValid() {
    const timestamp = new Date(this.auth_info.expires).getTime();
    const is_valid = new Date().getTime() < timestamp;
    return is_valid;
  }
}

module.exports = OAuth;
