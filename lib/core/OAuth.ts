'use strict';

import Uuid from 'uuid';
import Constants from '../utils/Constants';
import { OAuthError } from '../utils/Utils';
import type Request from '../utils/Request';
import type EventEmitter from 'events';
import type { AxiosInstance } from 'axios';

export interface Credentials {
  access_token?: string;
  refresh_token?: string;
  expires_in?: Date;
}

class OAuth {
  #request: AxiosInstance;
  #identity;
  #credentials: Credentials = {};

  #polling_interval = 5;
  #ev: EventEmitter = null;

  constructor(ev: EventEmitter, request: AxiosInstance) {
    this.#ev = ev;
    this.#request = request;
  }

  /**
   * Starts the auth flow in case no valid credentials are available.
   * @param credentials
   */
  init(credentials: Credentials) {
    this.#credentials = credentials;
    if (!credentials.access_token) {
      this.#getUserCode();
    }
  }

  /**
   * Asks the server for a user code and verification URL.
   * 
   */
  async #getUserCode(): Promise<void> {
    this.#identity = await this.#getClientIdentity();

    const data = {
      client_id: this.#identity.client_id,
      scope: Constants.OAUTH.SCOPE,
      device_id: Uuid.v4(),
      model_name: Constants.OAUTH.MODEL_NAME
    };

    const response = await this.#request({
      data,
      url: '/o/oauth2/device/code',
      baseURL: Constants.URLS.YT_BASE,
      method: 'post'
    }).catch((err) => err);

    if (response instanceof Error)
      return this.#ev.emit('auth', new OAuthError('Could not obtain user code.', response.message));

    this.#ev.emit('auth', {
      ...response.data,
      status: 'AUTHORIZATION_PENDING'
    });

    this.#polling_interval = response.data.interval;

    this.#startPolling(response.data.device_code);
  }

  /**
   * Polls the authorization server until access is granted by the user.
   * @param device_code
   */
  #startPolling(device_code: string) {
    const poller = setInterval(async () => {
      const data = {
        ...this.#identity,
        code: device_code,
        grant_type: Constants.OAUTH.GRANT_TYPE
      };

      const response = await this.#request({
        data,
        url: '/o/oauth2/token',
        baseURL: Constants.URLS.YT_BASE,
        method: 'post'
      }).catch((err) => err);

      if (response instanceof Error)
        return this.#ev.emit('auth', new OAuthError('Could not obtain user code.', { status: 'FAILED', message: response.message }));

      if (response.data.error) {
        switch (response.data.error) {
          case 'access_denied':
            this.#ev.emit('auth', new OAuthError('Access was denied.', { status: 'ACCESS_DENIED' }));
            break;
          case 'expired_token':
            this.#ev.emit('auth', new OAuthError('The device code has expired, restarting auth flow.', { status: 'DEVICE_CODE_EXPIRED' }));
            clearInterval(poller);
            this.#getUserCode();
            break;
          default:
            break;
        }

        return;
      }

      const expiration_date = new Date(new Date().getTime() + response.data.expires_in * 1000);

      this.#credentials = {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
        expires: expiration_date
      };

      this.#ev.emit('auth', {
        credentials: this.#credentials,
        status: 'SUCCESS'
      });

      clearInterval(poller);
    }, this.#polling_interval * 1000);
  }

  /**
   * Refreshes the access token if necessary.
   * 
   */
  async checkAccessTokenValidity(): Promise<void> {
    const timestamp = new Date(this.#credentials.expires).getTime();

    if (new Date().getTime() > timestamp) {
      await this.#refreshAccessToken();
    }
  }

  /**
   * Retrieves a new access token using the refresh token.
   * 
   */
  async #refreshAccessToken(): Promise<void> {
    this.#identity = await this.#getClientIdentity();

    const data = {
      ...this.#identity,
      refresh_token: this.#credentials.refresh_token,
      grant_type: 'refresh_token'
    };

    const response = await this.#request({
      data,
      url: '/o/oauth2/token',
      baseURL: Constants.URLS.YT_BASE,
      method: 'post'
    }).catch((err) => err);

    if (response instanceof Error)
      return this.#ev.emit('update-credentials', new OAuthError('Could not refresh access token.', { status: 'FAILED' }));

    const expiration_date = new Date(new Date().getTime() + response.data.expires_in * 1000);

    this.#credentials = {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token || this.credentials.refresh_token,
      expires_in: expiration_date
    };

    this.#ev.emit('update-credentials', {
      credentials: this.#credentials,
      status: 'SUCCESS'
    });
  }

  /**
   * Revokes credentials.
   * 
   */
  revokeCredentials(): Promise<{ success: boolean; status_code: number; }> {
    return this.#request({
      url: '/o/oauth2/revoke',
      baseURL: Constants.URLS.YT_BASE,
      params: { token: this.getAccessToken() },
      method: 'post'
    });
  }

  /**
   * Retrieves client identity from YouTube TV.
   * 
   */
  async #getClientIdentity(): Promise<{ client_id: string; client_secret: string; }> {
    const response = await this.#request({
      url: '/tv',
      baseURL: Constants.URLS.YT_BASE,
      headers: Constants.OAUTH.HEADERS
    });

    const url_body = Constants.OAUTH.REGEX.AUTH_SCRIPT.exec(response.data)[1];
    const script = await this.#request({ url: url_body, baseURL: Constants.URLS.YT_BASE });

    const client_identity =
      script.data
        .replace(/\n/g, '')
        .match(Constants.OAUTH.REGEX.CLIENT_IDENTITY);

    return client_identity.groups;
  }

  get credentials() {
    return this.#credentials;
  }

  /**
   * Validates the credentials.
   * 
   */
  validateCredentials(): boolean {
    return this.#credentials.hasOwnProperty('access_token')
      && this.#credentials.hasOwnProperty('refresh_token')
      && this.#credentials.hasOwnProperty('expires');
  }
}

export default OAuth;