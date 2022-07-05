'use strict';

const Player = require('./Player');
const Proto = require('../proto');
const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');
const UserAgent = require('user-agents');

/** @namespace */
class SessionBuilder {
  #config;
  #request;

  #key;
  #client_name;
  #client_version;
  #api_version;
  #remote_host;
  #context;
  #player;

  /**
   * @param {object} config
   * @param {object} request
   */
  constructor(config, request) {
    this.#config = config;
    this.#request = request;
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
    this.#player = await new Player(data[1], this.#request).init();

    this.#context = this.#buildContext();

    return this;
  }

  /**
   * Builds a valid context object.
   * @returns {object}
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
        originalUrl: Constants.URLS.API.BASE
      },
      user: { lockedSafetyMode: false },
      request: { useSsl: true }
    };

    return context;
  }

  /**
   * Retrieves initial configuration.
   * @returns {Promise.<object>}
   */
  async #getYtConfig() {
    const response = await this.#request.get(`${Constants.URLS.YT_BASE}/sw.js_data`);
    return JSON.parse(response.data.replace(')]}\'', ''));
  }

  /**
   * Retrieves the YouTube player id.
   * @returns {Promise.<string>}
   */
  async #getPlayerId() {
    const response = await this.#request.get(`${Constants.URLS.YT_BASE}/iframe_api`);
    return Utils.getStringBetweenStrings(response.data, 'player\\/', '\\/');
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