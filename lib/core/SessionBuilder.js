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
  #remote_host;
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
    
    const ytcfg = data[0][0][2];
    
    this.#key = ytcfg[1];
    this.#api_version = `v${ytcfg[0][0][6]}`;
    this.#client_name = Constants.CLIENTS.WEB.NAME;
    this.#client_version = ytcfg[0][0][16];
    this.#remote_host = ytcfg[0][0][3];
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
  
  async #getYtConfig() {
    const response = await Axios.get(`${Constants.URLS.YT_BASE}/sw.js_data`).catch((err) => err);
  
    if (response instanceof Error) 
      throw new Utils.InnertubeError('Could not retrieve session data', {
        status_code: response?.response?.status || 0, 
        message: response.message 
      });
    
    return JSON.parse(response.data.replace(')]}\'', ''));
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