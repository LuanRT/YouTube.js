'use strict';

const Axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');

/** @namespace */
class Request {
  /**
   * @param {import('../Innertube')} session
   */
  constructor(session) {
    this.session = session;

    this.instance = Axios.create({
      ...session.axios.defaults,
      baseURL: Constants.URLS.YT_BASE_API + session.version,
      headers: Constants.INNERTUBE_HEADERS_BASE,
      params: { key: session.key, prettyPrint: false },
      validateStatus: () => true,
      timeout: 15000
    });

    this.#setupInterceptor();

    return this.instance;
  }

  #setupInterceptor() {
    this.instance.interceptors.request.use((config) => {
      const is_json_payload = typeof config.data == 'object';
      
      config.headers['user-agent'] = Utils.getRandomUserAgent('desktop').userAgent;
      config.headers['accept-language'] = `en-${this.session.config.gl || 'US'}`;
      config.headers['x-goog-visitor-id'] = this.session.context.client.visitorData || '';
      config.headers['x-youtube-client-version'] = this.session.context.client.clientVersion;
      
      if (is_json_payload) {
        config.data = {
          context: JSON.parse(JSON.stringify(this.session.context)), // deep copies the context object
          ...config.data
        };
        
        this.#adjustContext(config.data.context, config.data.client);
        
        config.headers['x-youtube-client-version'] = config.data.context.client.clientVersion;
        config.headers['x-origin'] = config.data.context.client.originalUrl;
        config.headers['origin'] = config.data.context.client.originalUrl;
        
        config.data.client == 'YTMUSIC' && 
          (config.baseURL = Constants.URLS.YT_MUSIC_BASE_API + this.session.version);
        
        delete config.data.client;
      } 
      
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
    
    /**
     * Standardizes the API response and catches all errors.
     */
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
  
  /**
   * Adjusts the context according to the given client.
   *
   * @param {object} ctx
   * @param {string} client
   * @todo refactor this?
   * @returns {void}
   */
  #adjustContext(ctx, client) {
    switch (client) {
      case 'YTMUSIC':
        ctx.client.originalUrl = Constants.URLS.YT_MUSIC;
        ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC.VERSION;
        ctx.client.clientName = Constants.CLIENTS.YTMUSIC.NAME;
        break;
      case 'ANDROID':
        ctx.client.originalUrl = Constants.URLS.YT_BASE;
        ctx.client.clientVersion = Constants.CLIENTS.ANDROID.VERSION;
        ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
        ctx.client.clientName = Constants.CLIENTS.ANDROID.NAME;
        break;
      default:
        break;
    }
  }
}

module.exports = Request;