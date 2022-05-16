'use strict';

const Axios = require('axios');
const Player = require('./Player');
const Proto = require('../proto');
const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');
const UserAgent = require('user-agents');

class SessionBuilder {
  #config;
  
  #key;
  #client_name;
  #client_version;
  #api_version;
  #context;
  #player;
  
  constructor(config) {
    this.#config = config;
  }
  
  async build() {
    const data = await Promise.all([
      this.#getYtConfig(), 
      this.#getPlayerId() 
    ]);
    
    const ytcfg = data[0];
    
    this.#key = ytcfg.INNERTUBE_API_KEY;
    this.#client_name = ytcfg.INNERTUBE_CLIENT_NAME;
    this.#client_version = ytcfg.INNERTUBE_CLIENT_VERSION;
    this.#api_version = ytcfg.INNERTUBE_API_VERSION;
    this.#player = await new Player(data[1]).init();
    
    this.#context = this.#buildContext();
    
    return this;
  }
  
  #buildContext() {
    const user_agent = new UserAgent({ deviceCategory: 'desktop' });
    
    const id = Utils.generateRandomString(11);
    const timestamp = Math.floor(Date.now() / 1000);
    
    const visitor_data = Proto.encodeVisitorData(id, timestamp);
    
    const context = {
      client: {
        hl: 'en',
        gl: this.#config.gl || 'US',
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
  
  async #getYtConfig() {
    const response = await Axios.get(`${Constants.URLS.YT_BASE}/sw.js`).catch((err) => err);
  
    if (response instanceof Error) 
      throw new Utils.InnertubeError('Could not retrieve session data', {
        status_code: response?.response?.status || 0, 
        message: response.message 
      });
      
    return JSON.parse(Utils.getStringBetweenStrings(response.data, 'ytcfg.set(', ')'));
  }
  
  async #getPlayerId() {
    const response = await Axios.get(`${Constants.URLS.YT_BASE}/iframe_api`).catch((err) => err);
  
    if (response instanceof Error)
      throw new Utils.InnertubeError('Could not retrieve js player id', { 
        status_code: response?.response?.status || 0,
        message: response.message
      });
      
    return Utils.getStringBetweenStrings(response.data, 'player\\/', '\\/');
  }
  
  get key() {
    return this.#key;
  }
  
  get context() {
    return this.#context;
  }
  
  get api_version() {
    return this.#api_version;
  }
  
  get client_version() {
    return this.#client_version;
  }
  
  get client_name() {
    return this.#client_name;
  }
  
  get player() {
    return this.#player;
  }
}

module.exports = SessionBuilder;