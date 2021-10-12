'use strict';

const Axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');
const EventEmitter = require('events');
const Uuid = require("uuid");

class OAuth extends EventEmitter {
  constructor (creds) {
    super();
    // Default interval between requests when waiting for authorization.
    this.refresh_interval = 5;
    
    // OAuth URLs:
    this.oauth_code_url = `${Constants.urls.YT_BASE_URL}/o/oauth2/device/code`;
    this.oauth_token_url = `${Constants.urls.YT_BASE_URL}/o/oauth2/token`;
    
    // Used to check whether an access token is valid or not.
    this.guide_url = `${Constants.urls.YT_BASE_URL}/youtubei/v1/guide`;
    
    // These are always the same, so we shouldn't have any problems for now.
    this.model_name = Constants.oauth.model_name;
    this.grant_type = Constants.oauth.grant_type;
    this.scope = Constants.oauth.scope;
    
    // Script that contains important information such as client id and client secret.
    this.auth_script_regex = /<script id=\"base-js\" src=\"(.*?)\" nonce=".*?"><\/script>/;
    
    // Used to find the credentials inside the script.
    this.identity_regex = /var .+?=\"(?<id>.+?)\",[.|\s].?=\"(?<secret>.+?)\"/;
    
    if (creds.access_token != undefined && creds.refresh_token != undefined) return;
    this.requestAuthCode();
  }
  
  async waitForAuth(device_code) {
    const data = {
      client_id: this.client_id,
      client_secret: this.client_secret,
      code: device_code,
      grant_type: this.grant_type
    };
      
    setTimeout(async () => {
      const response = await Axios.post(this.oauth_token_url, JSON.stringify(data), Constants.oauth_reqopts).catch((error) => error);
      if (response instanceof Error) 
        return this.emit('auth', {
          error: 'Could not get auth token.',
          status: 'FAILED'
        });
      
      if (response.data.error) {
        switch (response.data.error) {
          case 'slow_down':
          case 'authorization_pending':
            this.waitForAuth(device_code);
            break;
          case 'access_denied':
            this.emit('auth', {
              error: 'The access was denied.',
              status: 'ACCESS_DENIED'
            });
            break;
          case 'expired_token':
            this.emit('auth', {
              error: 'The device code has expired, requesting a new one.',
              status: 'DEVICE_CODE_EXPIRED'
            });
            this.requestAuthCode();
            break;
          default:
        }
      } else {
        this.emit('auth', {
          access_token: response.data.access_token, 
          refresh_token: response.data.refresh_token,
          token_type: response.data.token_type,
          expires: response.data.expires_in,
          scope: response.data.scope,
          status: 'SUCCESS'
        });
      }
    }, 1000 * this.refresh_interval);
  }
  
  async requestAuthCode() {
    const identity = await this.getClientIdentity();
    this.client_id = identity.id;
    this.client_secret = identity.secret;
    
    const data = {
      client_id: this.client_id,
      scope: this.scope,
      device_id : Uuid.v4(),
      model_name: this.model_name
    };
    
    const response = await Axios.post(this.oauth_code_url, JSON.stringify(data), Constants.oauth_reqopts).catch((error) => error);
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
    
    // Keeps requesting at a specific rate until the authorization is granted or denied.
    this.waitForAuth(response.data.device_code);
  }
  
  async getClientIdentity() {
    // The first request is made to get the auth script url, hard-coding it isn't viable as it changes overtime.
    const yttv_response = await Axios.get(`${Constants.urls.YT_BASE_URL}/tv`, Constants.oauth_reqopts).catch((error) => error);
    if (yttv_response instanceof Error) throw new Error(`Could not get identify: ${yttv_response.message}`);
    
    // Here we get the script and extract the necessary data to proceed with the auth flow.
    const url_body = this.auth_script_regex.exec(yttv_response.data)[1];
    const script_url = `${Constants.urls.YT_BASE_URL}/${url_body}`;
    const response = await Axios.get(script_url, Constants.default_headers).catch((error) => error);
    if (response instanceof Error) throw new Error(`Could not fetch data from auth script: ${response.message}`);
    
    const identify_function = Utils.getStringBetweenStrings(response.data, '=function(){var a=window.environment', '(function()');
    const client_identity = identify_function.match(this.identity_regex).groups;
    return client_identity;
  }
  
  async refreshAccessToken (refresh_token) {
    const identity = await this.getClientIdentity();
    
    const data = {
      client_id: identity.id,
      client_secret: identity.secret,
      refresh_token,
      grant_type : 'refresh_token',
    };
    
    const response = await Axios.post(this.oauth_token_url, JSON.stringify(data), Constants.oauth_reqopts).catch((error) => error);
    if (response instanceof Error) 
      return this.emit('refresh-token', {
        error: 'Could not refresh token.',
        status: 'FAILED'
      });
     
    this.emit('refresh-token', {
      access_token: response.data.access_token, 
      token_type: response.data.token_type,
      expires: response.data.expires_in,
      scope: response.data.scope,
      status: 'SUCCESS'
    });
  }
  
  async checkTokenValidity(access_token, session) {
    let headers = Constants.innertube_request_opts({ session }).headers;
    headers.authorization = `Bearer ${access_token}`;
    
    const response = await Axios.post(this.guide_url, JSON.stringify({ context : session.context }), { headers }).catch((error) => error);
    if (response instanceof Error) return 'INVALID';
    return 'VALID';
  }
}

module.exports = OAuth;