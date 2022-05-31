'use strict';

const Axios = require('axios');
const Player = require('./Player');
const Proto = require('../proto');
const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');
const UserAgent = require('user-agents');

/** @namespace */
class SessionBuilder {
  /**
   * @type {AxiosInstance}
   */
  #axios;
  #config;
  
  #key;
  #client_name;
  #client_version;
  #api_version;
  #remote_host;
  #context;
  #player;
  
  /**
   * @param {object} config
   * @constructor
   */
  constructor(config) {
    this.#config = config;
    this.#axios = Axios.create({ proxy: this.#config.proxy, httpAgent: this.#config.httpAgent, httpsAgent: this.#config.httpsAgent })
  }
  
  async build() {
    const data = await Promise.all([
      this.#getYtConfig(), 
      this.#getPlayerId() 
    ]);
    
    const ytcfg = data[0][0][2];
    
    this.#key = ytcfg[1];
    this.#api_version = `v${ytcfg[0][0][6]}`;
    this.#client_name = Constants.CLIENTS.WEB.NAME;
    this.#client_version = ytcfg[0][0][16];
    this.#remote_host = ytcfg[0][0][3];
    this.#player = await new Player(data[1], this.#axios).init();
  
    this.#context = this.#buildContext();
    
    return this;
  }
  
  /**
   * Builds a valid context object.
   * @returns
   */
  #buildContext() {
    const user_agent = new UserAgent({ deviceCategory: 'desktop' });
    
    const id = Utils.generateRandomString(11);
    const timestamp = Math.floor(Date.now() / 1000);
    
    const visitor_data = Proto.encodeVisitorData(id, timestamp);
    
    const context = {
      client: {
        hl: 'en',
        gl: this.#config.gl || 'US',
        remoteHost: this.#remote_host,
        deviceMake: user_agent.vendor,
        deviceModel: user_agent.platform,
        visitorData: visitor_data,
        userAgent: user_agent.toString(),
        clientName: this.#client_name,
        clientVersion: this.#client_version,
        originalUrl: Constants.URLS.YT_BASE
      },
      user: { lockedSafetyMode: false },
      request: { useSsl: true }
    }
    
    return context;
  }
  
  /**
   * Retrieves initial configuration such as keys, 
   * client data, etc.
   * @returns Promise.<object>
   */
  async #getYtConfig() {
    const response = await this.axios.get(`${Constants.URLS.YT_BASE}/sw.js_data`).catch((err) => err);
  
    if (response instanceof Error) 
      throw new Utils.InnertubeError('Could not retrieve configuration data', {
        status_code: response?.response?.status || 0, 
        message: response.message 
      });
    
    return JSON.parse(response.data.replace(')]}\'', ''));
  }
  
  /**
   * Retrives the YouTube player id.
   * @returns {Promise.<string>
   */
  async #getPlayerId() {
    const response = await this.axios.get(`${Constants.URLS.YT_BASE}/iframe_api`).catch((err) => err);
  
    if (response instanceof Error)
      throw new Utils.InnertubeError('Could not retrieve js player id', { 
        status_code: response?.response?.status || 0,
        message: response.message
      });
      
    return Utils.getStringBetweenStrings(response.data, 'player\\/', '\\/');
  }

  get axios() {
    return this.#axios;
  }

  /** @readonly */
  get key() {
    return this.#key;
  }
  
  /** @readonly */
  get context() {
    return this.#context;
  }
  
  /** @readonly */
  get api_version() {
    return this.#api_version;
  }
  
  /** @readonly */
  get client_version() {
    return this.#client_version;
  }
  
  /** @readonly */
  get client_name() {
    return this.#client_name;
  }
  
  /** @readonly */
  get player() {
    return this.#player;
  }
}

module.exports = SessionBuilder;