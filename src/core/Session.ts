import Player from './Player';
import Proto from '../proto/index';
import Actions from './Actions';
import Constants from '../utils/Constants';
import UniversalCache from '../utils/Cache';
import EventEmitterLike from '../utils/EventEmitterLike';

import HTTPClient, { FetchFunction } from '../utils/HTTPClient';
import { DeviceCategory, generateRandomString, getRandomUserAgent, InnertubeError, SessionError } from '../utils/Utils';
import OAuth, { Credentials, OAuthAuthErrorEventHandler, OAuthAuthEventHandler, OAuthAuthPendingEventHandler } from './OAuth';

export enum ClientType {
  WEB = 'WEB',
  MUSIC = 'WEB_REMIX',
  ANDROID = 'ANDROID',
  ANDROID_MUSIC = 'ANDROID_MUSIC'
}

export interface Context {
  client: {
    hl: string;
    gl: string;
    remoteHost: string;
    visitorData: string;
    userAgent: string;
    clientName: string;
    clientVersion: string;
    clientScreen?: string,
    androidSdkVersion?: string;
    osName: string;
    osVersion: string;
    platform: string;
    clientFormFactor: string;
    userInterfaceTheme: string;
    timeZone: string;
    browserName: string;
    browserVersion: string;
    originalUrl: string;
    deviceMake: string;
    deviceModel: string;
    utcOffsetMinutes: number;
  };
  thirdParty?: object;
  user: {
    lockedSafetyMode: false;
  };
  request: {
    useSsl: true;
  };
}

export interface SessionOptions {
  lang?: string;
  device_category?: DeviceCategory;
  client_type?: ClientType;
  timezone?: string;
  cache?: UniversalCache;
  cookie?: string;
  fetch?: FetchFunction;
}

export default class Session extends EventEmitterLike {
  #api_version;
  #key;
  #context;
  #player;

  oauth;
  http;
  logged_in;
  actions;
  cache;

  constructor(context: Context, api_key: string, api_version: string, player: Player, cookie?: string, fetch?: FetchFunction, cache?: UniversalCache) {
    super();
    this.#context = context;
    this.#key = api_key;
    this.#api_version = api_version;
    this.#player = player;
    this.http = new HTTPClient(this, cookie, fetch);
    this.actions = new Actions(this);
    this.oauth = new OAuth(this);
    this.logged_in = !!cookie;
    this.cache = cache;
  }

  on(type: 'auth', listener: OAuthAuthEventHandler): void;
  on(type: 'auth-pending', listener: OAuthAuthPendingEventHandler): void;
  on(type: 'auth-error', listener: OAuthAuthErrorEventHandler): void;
  on(type: 'update-credentials', listener: OAuthAuthEventHandler): void;

  on(type: string, listener: (...args: any[]) => void): void {
    super.on(type, listener);
  }

  once(type: 'auth', listener: OAuthAuthEventHandler): void;
  once(type: 'auth-pending', listener: OAuthAuthPendingEventHandler): void;
  once(type: 'auth-error', listener: OAuthAuthErrorEventHandler): void;

  once(type: string, listener: (...args: any[]) => void): void {
    super.once(type, listener);
  }

  static async create(options: SessionOptions = {}) {
    const { context, api_key, api_version } = await Session.getSessionData(options.lang, options.device_category, options.client_type, options.timezone, options.fetch);
    return new Session(context, api_key, api_version, await Player.create(options.cache, options.fetch), options.cookie, options.fetch, options.cache);
  }

  static async getSessionData(
    lang = 'en-US',
    device_category: DeviceCategory = 'desktop',
    client_name: ClientType = ClientType.WEB,
    tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone,
    fetch: FetchFunction = globalThis.fetch
  ) {
    const url = new URL('/sw.js_data', Constants.URLS.YT_BASE);

    const res = await fetch(url, {
      headers: {
        'accept-language': lang,
        'user-agent': getRandomUserAgent('desktop'),
        'accept': '*/*',
        'referer': 'https://www.youtube.com/sw.js',
        'cookie': `PREF=tz=${tz.replace('/', '.')}`
      }
    });

    if (!res.ok) {
      throw new SessionError(`Failed to get session data: ${res.status}`);
    }

    const text = await res.text();
    const data = JSON.parse(text.replace(/^\)\]\}'/, ''));

    const ytcfg = data[0][2];

    const api_version = `v${ytcfg[0][0][6]}`;

    const [ [ device_info ], api_key ] = ytcfg;

    const id = generateRandomString(11);
    const timestamp = Math.floor(Date.now() / 1000);
    const visitor_data = Proto.encodeVisitorData(id, timestamp);

    const context: Context = {
      client: {
        hl: device_info[0],
        gl: device_info[2],
        remoteHost: device_info[3],
        visitorData: visitor_data,
        userAgent: device_info[14],
        clientName: client_name,
        clientVersion: device_info[16],
        osName: device_info[17],
        osVersion: device_info[18],
        platform: device_category.toUpperCase(),
        clientFormFactor: 'UNKNOWN_FORM_FACTOR',
        userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
        timeZone: device_info[79],
        browserName: device_info[86],
        browserVersion: device_info[87],
        originalUrl: Constants.URLS.API.BASE,
        deviceMake: device_info[11],
        deviceModel: device_info[12],
        utcOffsetMinutes: new Date().getTimezoneOffset()
      },
      user: {
        lockedSafetyMode: false
      },
      request: {
        useSsl: true
      }
    };

    return { context, api_key, api_version };
  }

  async signIn(credentials?: Credentials): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const error_handler: OAuthAuthErrorEventHandler = (err) => reject(err);

      this.once('auth', (data) => {
        this.off('auth-error', error_handler);

        if (data.status === 'SUCCESS') {
          this.logged_in = true;
          resolve();
        }

        reject(data);
      });

      this.once('auth-error', error_handler);

      try {
        await this.oauth.init(credentials);

        if (this.oauth.validateCredentials()) {
          await this.oauth.refreshIfRequired();
          this.logged_in = true;
          resolve();
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  async signOut() {
    if (!this.logged_in)
      throw new InnertubeError('You are not signed in');

    const response = await this.oauth.revokeCredentials();
    this.logged_in = false;

    return response;
  }

  get key() {
    return this.#key;
  }

  get api_version() {
    return this.#api_version;
  }

  get client_version() {
    return this.#context.client.clientVersion;
  }

  get client_name() {
    return this.#context.client.clientName;
  }

  get context() {
    return this.#context;
  }

  get player() {
    return this.#player;
  }

  get lang() {
    return this.#context.client.hl;
  }
}