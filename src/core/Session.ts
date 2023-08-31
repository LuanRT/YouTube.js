import * as Constants from '../utils/Constants.js';
import EventEmitterLike from '../utils/EventEmitterLike.js';
import Actions from './Actions.js';
import Player from './Player.js';

import * as Proto from '../proto/index.js';
import type { ICache } from '../types/Cache.js';
import type { FetchFunction } from '../types/PlatformShim.js';
import HTTPClient from '../utils/HTTPClient.js';
import type { DeviceCategory } from '../utils/Utils.js';
import { generateRandomString, getRandomUserAgent, InnertubeError, Platform, SessionError } from '../utils/Utils.js';
import type { Credentials, OAuthAuthErrorEventHandler, OAuthAuthEventHandler, OAuthAuthPendingEventHandler } from './OAuth.js';
import OAuth from './OAuth.js';

export enum ClientType {
  WEB = 'WEB',
  KIDS = 'WEB_KIDS',
  MUSIC = 'WEB_REMIX',
  IOS = 'iOS',
  ANDROID = 'ANDROID',
  ANDROID_MUSIC = 'ANDROID_MUSIC',
  ANDROID_CREATOR = 'ANDROID_CREATOR',
  TV_EMBEDDED = 'TVHTML5_SIMPLY_EMBEDDED_PLAYER'
}

export interface Context {
  client: {
    hl: string;
    gl: string;
    remoteHost?: string;
    screenDensityFloat: number;
    screenHeightPoints: number;
    screenPixelDensity: number;
    screenWidthPoints: number;
    visitorData: string;
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
    userAgent?: string;
    browserName?: string;
    browserVersion?: string;
    originalUrl: string;
    deviceMake: string;
    deviceModel: string;
    utcOffsetMinutes: number;
    kidsAppInfo?: {
      categorySettings: {
        enabledCategories: string[];
      };
      contentSettings: {
        corpusPreference: string;
        kidsNoSearchMode: string;
      };
    };
  };
  user: {
    enableSafetyMode: boolean;
    lockedSafetyMode: boolean;
    onBehalfOfUser?: string;
  };
  thirdParty?: {
    embedUrl: string;
  };
}

export interface SessionOptions {
  /**
   * Language.
   */
  lang?: string;
  /**
   * Geolocation.
   */
  location?: string;
  /**
   * The account index to use. This is useful if you have multiple accounts logged in.
   * **NOTE:**
   * Only works if you are signed in with cookies.
   */
  account_index?: number;
  /**
   * Specify the Page ID of the YouTube profile/channel to use, if the logged-in account has multiple profiles.
   */
  on_behalf_of_user?: string;
  /**
   * Specifies whether to retrieve the JS player. Disabling this will make session creation faster.
   * **NOTE:** Deciphering formats is not possible without the JS player.
   */
  retrieve_player?: boolean;
  /**
   * Specifies whether to enable safety mode. This will prevent the session from loading any potentially unsafe content.
   */
  enable_safety_mode?: boolean;
  /**
   * Specifies whether to generate the session data locally or retrieve it from YouTube.
   * This can be useful if you need more performance.
   */
  generate_session_locally?: boolean;
  /**
   * Platform to use for the session.
   */
  device_category?: DeviceCategory;
  /**
   * InnerTube client type.
   */
  client_type?: ClientType;
  /**
   * The time zone.
   */
  timezone?: string;
  /**
   * Used to cache the deciphering functions from the JS player.
   */
  cache?: ICache;
  /**
   * YouTube cookies.
   */
  cookie?: string;
  /**
   * Setting this to a valid and persistent visitor data string will allow YouTube to give this session tailored content even when not logged in.
   * A good way to get a valid one is by either grabbing it from a browser or calling InnerTube's `/visitor_id` endpoint.
   */
  visitor_data?: string;
  /**
   * Fetch function to use.
   */
  fetch?: FetchFunction;
}

export interface SessionData {
  context: Context;
  api_key: string;
  api_version: string;
}

/**
 * Represents an InnerTube session. This holds all the data needed to make requests to YouTube.
 */
export default class Session extends EventEmitterLike {
  #api_version: string;
  #key: string;
  #context: Context;
  #account_index: number;
  #player?: Player;

  oauth: OAuth;
  http: HTTPClient;
  logged_in: boolean;
  actions: Actions;
  cache?: ICache;

  constructor(context: Context, api_key: string, api_version: string, account_index: number, player?: Player, cookie?: string, fetch?: FetchFunction, cache?: ICache) {
    super();
    this.#context = context;
    this.#account_index = account_index;
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
    const { context, api_key, api_version, account_index } = await Session.getSessionData(
      options.lang,
      options.location,
      options.account_index,
      options.visitor_data,
      options.enable_safety_mode,
      options.generate_session_locally,
      options.device_category,
      options.client_type,
      options.timezone,
      options.fetch,
      options.on_behalf_of_user
    );

    return new Session(
      context, api_key, api_version, account_index,
      options.retrieve_player === false ? undefined : await Player.create(options.cache, options.fetch),
      options.cookie, options.fetch, options.cache
    );
  }

  static async getSessionData(
    lang = '',
    location = '',
    account_index = 0,
    visitor_data = '',
    enable_safety_mode = false,
    generate_session_locally = false,
    device_category: DeviceCategory = 'desktop',
    client_name: ClientType = ClientType.WEB,
    tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone,
    fetch: FetchFunction = Platform.shim.fetch,
    on_behalf_of_user?: string
  ) {
    let session_data: SessionData;

    const session_args = { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode, visitor_data, on_behalf_of_user };

    if (generate_session_locally) {
      session_data = this.#generateSessionData(session_args);
    } else {
      try {
        // This can fail if the data changes or the request is blocked for some reason.
        session_data = await this.#retrieveSessionData(session_args, fetch);
      } catch (err) {
        session_data = this.#generateSessionData(session_args);
      }
    }

    return { ...session_data, account_index };
  }

  static async #retrieveSessionData(options: {
    lang: string;
    location: string;
    time_zone: string;
    device_category: string;
    client_name: string;
    enable_safety_mode: boolean;
    visitor_data: string;
    on_behalf_of_user?: string;
  }, fetch: FetchFunction = Platform.shim.fetch): Promise<SessionData> {
    const url = new URL('/sw.js_data', Constants.URLS.YT_BASE);

    let visitor_id = generateRandomString(11);

    if (options.visitor_data) {
      const decoded_visitor_data = Proto.decodeVisitorData(options.visitor_data);
      visitor_id = decoded_visitor_data.id;
    }

    const res = await fetch(url, {
      headers: {
        'accept-language': options.lang || 'en-US',
        'user-agent': getRandomUserAgent('desktop'),
        'accept': '*/*',
        'referer': 'https://www.youtube.com/sw.js',
        'cookie': `PREF=tz=${options.time_zone.replace('/', '.')};VISITOR_INFO1_LIVE=${visitor_id};`
      }
    });

    if (!res.ok)
      throw new SessionError(`Failed to retrieve session data: ${res.status}`);

    const text = await res.text();
    const data = JSON.parse(text.replace(/^\)\]\}'/, ''));

    const ytcfg = data[0][2];

    const api_version = `v${ytcfg[0][0][6]}`;

    const [ [ device_info ], api_key ] = ytcfg;

    const context: Context = {
      client: {
        hl: device_info[0],
        gl: options.location || device_info[2],
        remoteHost: device_info[3],
        screenDensityFloat: 1,
        screenHeightPoints: 1080,
        screenPixelDensity: 1,
        screenWidthPoints: 1920,
        visitorData: device_info[13],
        clientName: options.client_name,
        clientVersion: device_info[16],
        osName: device_info[17],
        osVersion: device_info[18],
        platform: options.device_category.toUpperCase(),
        clientFormFactor: 'UNKNOWN_FORM_FACTOR',
        userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
        timeZone: device_info[79] || options.time_zone,
        browserName: device_info[86],
        browserVersion: device_info[87],
        originalUrl: Constants.URLS.YT_BASE,
        deviceMake: device_info[11],
        deviceModel: device_info[12],
        utcOffsetMinutes: -new Date().getTimezoneOffset()
      },
      user: {
        enableSafetyMode: options.enable_safety_mode,
        lockedSafetyMode: false,
        onBehalfOfUser: options.on_behalf_of_user
      }
    };

    return { context, api_key, api_version };
  }

  static #generateSessionData(options: {
    lang: string;
    location: string;
    time_zone: string;
    device_category: DeviceCategory;
    client_name: string;
    enable_safety_mode: boolean;
    visitor_data: string;
    on_behalf_of_user?: string;
  }): SessionData {
    let visitor_id = generateRandomString(11);

    if (options.visitor_data) {
      const decoded_visitor_data = Proto.decodeVisitorData(options.visitor_data);
      visitor_id = decoded_visitor_data.id;
    }

    const context: Context = {
      client: {
        hl: options.lang || 'en',
        gl: options.location || 'US',
        screenDensityFloat: 1,
        screenHeightPoints: 1080,
        screenPixelDensity: 1,
        screenWidthPoints: 1920,
        visitorData: Proto.encodeVisitorData(visitor_id, Math.floor(Date.now() / 1000)),
        clientName: options.client_name,
        clientVersion: Constants.CLIENTS.WEB.VERSION,
        osName: 'Windows',
        osVersion: '10.0',
        platform: options.device_category.toUpperCase(),
        clientFormFactor: 'UNKNOWN_FORM_FACTOR',
        userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
        timeZone: options.time_zone,
        originalUrl: Constants.URLS.YT_BASE,
        deviceMake: '',
        deviceModel: '',
        utcOffsetMinutes: -new Date().getTimezoneOffset()
      },
      user: {
        enableSafetyMode: options.enable_safety_mode,
        lockedSafetyMode: false,
        onBehalfOfUser: options.on_behalf_of_user
      }
    };

    return { context, api_key: Constants.CLIENTS.WEB.API_KEY, api_version: Constants.CLIENTS.WEB.API_VERSION };
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

  /**
   * Signs out of the current account and revokes the credentials.
   */
  async signOut(): Promise<Response | undefined> {
    if (!this.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const response = await this.oauth.revokeCredentials();
    this.logged_in = false;

    return response;
  }

  /**
   * InnerTube API key.
   */
  get key(): string {
    return this.#key;
  }

  /**
   * InnerTube API version.
   */
  get api_version(): string {
    return this.#api_version;
  }

  get client_version(): string {
    return this.#context.client.clientVersion;
  }

  get client_name(): string {
    return this.#context.client.clientName;
  }

  get account_index(): number {
    return this.#account_index;
  }

  get context(): Context {
    return this.#context;
  }

  get player(): Player | undefined {
    return this.#player;
  }

  get lang(): string {
    return this.#context.client.hl;
  }
}