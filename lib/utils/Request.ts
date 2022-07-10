'use strict';

import Axios from 'axios';
import Constants from './Constants';
import Utils from './Utils';

class Request {
  #instance;
  #session;

  constructor(config) {
    this.config = config;

    /** @type {Axios.AxiosInstance} */
    this.#instance = Axios.create({
      proxy: config.proxy,
      httpAgent: config.http_agent,
      httpsAgent: config.https_agent,
      params: { prettyPrint: false },
      headers: {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate',
        'content-type': 'application/json',
        'user-agent': Utils.getRandomUserAgent('desktop').userAgent
      },
      validateStatus: () => true,
      timeout: 15000
    });

    this.#setupRequestInterceptor();
    this.#setupResponseInterceptor();
  }

  #setupRequestInterceptor() {
    this.#instance.interceptors.request.use(async (config) => {
      if (this.#session) {
        const innertube_url = `${Constants.URLS.API.PRODUCTION}${this.#session.version}`;

        config.baseURL = config.baseURL || innertube_url;

        config.headers['accept-language'] = `en-${this.#session.config.gl || 'US'}`;
        config.headers['x-goog-visitor-id'] = this.#session.context.client.visitorData || '';
        config.headers['x-youtube-client-version'] = this.#session.context.client.clientVersion;
        config.headers['x-origin'] = new URL(config.baseURL).origin;
        config.headers['origin'] = new URL(config.baseURL).origin;

        config.params.key = this.#session.key;

        const is_innertube_req = config.baseURL == innertube_url;

        // Copy the context into the payload.
        if (is_innertube_req && typeof config.data === 'object') {
          config.data = {
            context: JSON.parse(JSON.stringify(this.#session.context)), // Deep copies the context object
            ...config.data
          };

          this.#adjustContext(config.data.context, config.data.client);

          config.headers['x-youtube-client-version'] = config.data.context.client.clientVersion;

          delete config.data.client;
        }

        // Check if authentication is possible.
        if (this.#session.logged_in && is_innertube_req) {
          const oauth = this.#session.oauth;

          if (oauth.validateCredentials()) {
            // Check if the access token is valid to avoid authorization errors.
            await oauth.checkAccessTokenValidity();

            config.headers.authorization = `Bearer ${oauth.credentials.access_token}`;

            // Remove API key as it is not required when using oauth.
            delete config.params.key;
          }

          if (this.config.cookie) {
            const papisid = Utils.getStringBetweenStrings(this.config.cookie, 'PAPISID=', ';');
            config.headers.authorization = Utils.generateSidAuth(papisid);
            config.headers.cookie = this.config.cookie;
          }
        }
      }

      if (this.config.debug) {
        const url = `${(config.baseURL ? `${config.baseURL}` : '')}${config.url}`;
        console.info('\n', `[${config.method.toUpperCase()}] > ${url}`, '\n', config?.data || 'N/A', '\n');
      }

      return config;
    }, (error) => {
      throw new Utils.InnertubeError(error.message, error);
    });
  }

  #setupResponseInterceptor() {
    this.#instance.interceptors.response.use(
      (res) => {
        const response = {
          success: res.status === 200,
          status_code: res.status,
          data: res.data
        };

        if (res.status !== 200)
          throw new Utils.InnertubeError(`Request to ${res.config.url} failed with status code ${res.status}`, response);

        return response;
      });

    this.#instance.interceptors.response.use(undefined,
      (error) => {
        if (error.info) return Promise.reject(error);
        throw new Utils.InnertubeError('Could not complete this operation', error.message);
      });
  }

  /**
   * Adjusts the context object according to the given client.
   * @param {object} ctx
   * @param {string} client
   */
  #adjustContext(ctx, client) {
    switch (client) {
      case 'YTMUSIC':
        ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC.VERSION;
        ctx.client.clientName = Constants.CLIENTS.YTMUSIC.NAME;
        break;
      case 'ANDROID':
        ctx.client.clientVersion = Constants.CLIENTS.ANDROID.VERSION;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.clientName = Constants.CLIENTS.ANDROID.NAME;
        break;
      default:
        break;
    }
  }

  setSession(session) {
    this.#session = session;
  }

  /**
   * Returns the axios instance.
   * @returns {Axios.AxiosInstance}
   */
  get instance() {
    return this.#instance;
  }
}

export default Request;