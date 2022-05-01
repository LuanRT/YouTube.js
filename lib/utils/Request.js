'use strict';

const Axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');

class Request {
  constructor(session) {
    this.session = session;

    this.instance = Axios.create({
      baseURL: Constants.URLS.YT_BASE_API + session.version,
      headers: Constants.INNERTUBE_HEADERS_BASE,
      params: { key: session.key },
      validateStatus: () => true,
      timeout: 15000
    });

    this.#setupInterceptor();

    return this.instance;
  }

  #setupInterceptor() {
    this.instance.interceptors.request.use((config) => {
      const is_ytmusic = config.data?.includes(Constants.URLS.YT_MUSIC);

      config.headers['accept-language'] = `en-${this.session.config.gl || 'US'}`;
      config.headers['x-goog-visitor-id'] = this.session.context.client.visitorData || ''
      config.headers['x-youtube-client-version'] = this.session.context.client.clientVersion;
      config.headers['x-origin'] = is_ytmusic && Constants.URLS.YT_MUSIC || Constants.URLS.YT_BASE;
      config.headers['origin'] = is_ytmusic && Constants.URLS.YT_MUSIC || Constants.URLS.YT_BASE;
      config.headers['user-agent'] = Utils.getRandomUserAgent('desktop').userAgent;

      is_ytmusic && (config.baseURL = Constants.URLS.YT_MUSIC_BASE_API + this.session.version);

      if (this.session.logged_in) {
        const cookie = this.session.config.cookie;

        const token = cookie &&
          this.session.auth_apisid ||
          this.session.access_token;

        config.headers.cookie = cookie || '';
        config.headers.authorization = cookie && token || `Bearer ${token}`;

        !cookie && (delete config.params.key);
      }

      this.session.config.debug &&
        console.info('\n', '[' + config.method.toUpperCase() + ']', '>', config.baseURL + config.url, '\n', config?.data, '\n');

      return config;
    }, (error) => {
      throw new Utils.InnertubeError(error.message, error);
    });

    this.instance.interceptors.response.use((res) => {
      const response = {
        success: res.status === 200,
        status_code: res.status,
        data: res.data
      };

      if (res.status !== 200)
        throw new Utils.InnertubeError(`Request to ${res.config.url} failed with status code ${res.status} ${res.statusText}`, response);

      return response;
    });

    this.instance.interceptors.response.use(undefined, (error) => {
      if (error.info) return Promise.reject(error);
      throw new Utils.InnertubeError('Could not complete this operation', error.message);
    });
  }
}

module.exports = Request;
