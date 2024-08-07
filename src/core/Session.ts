import OAuth2 from './OAuth2.js';
import { Log, EventEmitter, HTTPClient, LZW } from '../utils/index.js';
import * as Constants from '../utils/Constants.js';
import * as Proto from '../proto/index.js';
import Actions from './Actions.js';
import Player from './Player.js';

import {
  generateRandomString, getRandomUserAgent,
  InnertubeError, Platform, SessionError
} from '../utils/Utils.js';

import type { DeviceCategory } from '../utils/Utils.js';
import type { FetchFunction, ICache } from '../types/index.js';
import type { OAuth2Tokens, OAuth2AuthErrorEventHandler, OAuth2AuthPendingEventHandler, OAuth2AuthEventHandler } from './OAuth2.js';

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

export type Context = {
  client: {
    hl: string;
    gl: string;
    remoteHost?: string;
    screenDensityFloat?: number;
    screenHeightPoints?: number;
    screenPixelDensity?: number;
    screenWidthPoints?: number;
    visitorData?: string;
    clientName: string;
    clientVersion: string;
    clientScreen?: string,
    androidSdkVersion?: number;
    osName: string;
    osVersion: string;
    platform: string;
    clientFormFactor: string;
    userInterfaceTheme?: string;
    timeZone: string;
    userAgent?: string;
    browserName?: string;
    browserVersion?: string;
    originalUrl?: string;
    deviceMake: string;
    deviceModel: string;
    utcOffsetMinutes: number;
    mainAppWebInfo?: {
      graftUrl: string;
      pwaInstallabilityStatus: string;
      webDisplayMode: string;
      isWebNativeShareAvailable: boolean;
    };
    memoryTotalKbytes?: string;
    configInfo?: {
      appInstallData: string;
    },
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
  request?: {
    useSsl: boolean;
    internalExperimentFlags: any[];
  };
}

type ContextData = {
  hl: string;
  gl: string;
  remote_host?: string;
  visitor_data: string;
  client_name: string;
  client_version: string;
  os_name: string;
  os_version: string;
  device_category: string;
  time_zone: string;
  enable_safety_mode: boolean;
  browser_name?: string;
  browser_version?: string;
  app_install_data?: string;
  device_make: string;
  device_model: string;
  on_behalf_of_user?: string;
}

export type SessionOptions = {
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
   *
   * **NOTE:** Only works if you are signed in with cookies.
   */
  account_index?: number;
  /**
   * Specify the Page ID of the YouTube profile/channel to use, if the logged-in account has multiple profiles.
   */
  on_behalf_of_user?: string;
  /**
   * Specifies whether to retrieve the JS player. Disabling this will make session creation faster.
   *
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
   *
   * **NOTE:** If you are using the cache option and a session has already been generated, this will be ignored.
   * If you want to force a new session to be generated, you must clear the cache or disable session caching.
   */
  generate_session_locally?: boolean;
  /**
   * Specifies whether the session data should be cached.
   */
  enable_session_cache?: boolean;
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
   * Used to cache algorithms, session data, and OAuth2 tokens.
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
  /**
   * Token for serviceIntegrityDimensions
   */
  po_token?: string;
}

export type SessionData = {
  context: Context;
  api_key: string;
  api_version: string;
}

export type SWSessionData = {
  context_data: ContextData;
  api_key: string;
  api_version: string;
}

export type SessionArgs = {
  lang: string;
  location: string;
  time_zone: string;
  device_category: DeviceCategory;
  client_name: ClientType;
  enable_safety_mode: boolean;
  visitor_data: string;
  on_behalf_of_user: string | undefined;
}

const TAG = 'Session';

/**
 * Represents an InnerTube session. This holds all the data needed to make requests to YouTube.
 */
export default class Session extends EventEmitter {
  context: Context;
  player?: Player;
  oauth: OAuth2;
  http: HTTPClient;
  logged_in: boolean;
  actions: Actions;
  cache?: ICache;
  key: string;
  api_version: string;
  account_index: number;
  po_token?: string;

  constructor(context: Context, api_key: string, api_version: string, account_index: number, player?: Player, cookie?: string, fetch?: FetchFunction, cache?: ICache, po_token?: string) {
    super();
    this.http = new HTTPClient(this, cookie, fetch);
    this.actions = new Actions(this);
    this.oauth = new OAuth2(this);
    this.logged_in = !!cookie;
    this.cache = cache;
    this.account_index = account_index;
    this.key = api_key;
    this.api_version = api_version;
    this.context = context;
    this.player = player;
    this.po_token = po_token;
  }

  on(type: 'auth', listener: OAuth2AuthEventHandler): void;
  on(type: 'auth-pending', listener: OAuth2AuthPendingEventHandler): void;
  on(type: 'auth-error', listener: OAuth2AuthErrorEventHandler): void;
  on(type: 'update-credentials', listener: OAuth2AuthEventHandler): void;

  on(type: string, listener: (...args: any[]) => void): void {
    super.on(type, listener);
  }

  once(type: 'auth', listener: OAuth2AuthEventHandler): void;
  once(type: 'auth-pending', listener: OAuth2AuthPendingEventHandler): void;
  once(type: 'auth-error', listener: OAuth2AuthErrorEventHandler): void;

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
      options.on_behalf_of_user,
      options.cache,
      options.enable_session_cache,
      options.po_token
    );

    return new Session(
      context, api_key, api_version, account_index,
      options.retrieve_player === false ? undefined : await Player.create(options.cache, options.fetch),
      options.cookie, options.fetch, options.cache
    );
  }

  /**
   * Retrieves session data from cache.
   * @param cache - A valid cache implementation.
   * @param session_args - User provided session arguments.
   */
  static async fromCache(cache: ICache, session_args: SessionArgs): Promise<SessionData | null> {
    const buffer = await cache.get('innertube_session_data');

    if (!buffer)
      return null;

    const data = new TextDecoder().decode(buffer.slice(4));

    try {
      const result = JSON.parse(LZW.decompress(data)) as SessionData;

      if (session_args.visitor_data) {
        result.context.client.visitorData = session_args.visitor_data;
      }

      if (session_args.lang)
        result.context.client.hl = session_args.lang;

      if (session_args.location)
        result.context.client.gl = session_args.location;

      if (session_args.on_behalf_of_user)
        result.context.user.onBehalfOfUser = session_args.on_behalf_of_user;

      result.context.client.timeZone = session_args.time_zone;
      result.context.client.platform = session_args.device_category.toUpperCase();
      result.context.client.clientName = session_args.client_name;
      result.context.user.enableSafetyMode = session_args.enable_safety_mode;

      return result;
    } catch (error) {
      Log.error(TAG, 'Failed to parse session data from cache.', error);
      return null;
    }
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
    on_behalf_of_user?: string,
    cache?: ICache,
    enable_session_cache = true,
    po_token?: string
  ) {
    const session_args = { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode, visitor_data, on_behalf_of_user, po_token };

    let session_data: SessionData | undefined;

    if (cache && enable_session_cache) {
      const cached_session_data = await this.fromCache(cache, session_args);
      if (cached_session_data) {
        Log.info(TAG, 'Found session data in cache.');
        session_data = cached_session_data;
      }
    }

    if (!session_data) {
      Log.info(TAG, 'Generating session data.');

      let api_key = Constants.CLIENTS.WEB.API_KEY;
      let api_version = Constants.CLIENTS.WEB.API_VERSION;

      let context_data: ContextData = {
        hl: lang || 'en',
        gl: location || 'US',
        remote_host: '',
        visitor_data: visitor_data || Proto.encodeVisitorData(generateRandomString(11), Math.floor(Date.now() / 1000)),
        client_name: client_name,
        client_version: Constants.CLIENTS.WEB.VERSION,
        device_category: device_category.toUpperCase(),
        os_name: 'Windows',
        os_version: '10.0',
        time_zone: tz,
        browser_name: 'Chrome',
        browser_version: '125.0.0.0',
        device_make: '',
        device_model: '',
        enable_safety_mode: enable_safety_mode
      };

      if (!generate_session_locally) {
        try {
          const sw_session_data = await this.#getSessionData(session_args, fetch);
          api_key = sw_session_data.api_key;
          api_version = sw_session_data.api_version;
          context_data = sw_session_data.context_data;
        } catch (error) {
          Log.error(TAG, 'Failed to retrieve session data from server. Session data generated locally will be used instead.', error);
        }
      }

      session_data = {
        api_key,
        api_version,
        context: this.#buildContext(context_data)
      };

      if (enable_session_cache)
        await this.#storeSession(session_data, cache);
    }

    Log.debug(TAG, 'Session data:', session_data);

    return { ...session_data, account_index };
  }

  static async #storeSession(session_data: SessionData, cache?: ICache) {
    if (!cache) return;

    Log.info(TAG, 'Compressing and caching session data.');

    const compressed_session_data = new TextEncoder().encode(LZW.compress(JSON.stringify(session_data)));

    const buffer = new ArrayBuffer(4 + compressed_session_data.byteLength);
    new DataView(buffer).setUint32(0, compressed_session_data.byteLength, true); // (Luan) XX: Leave this here for debugging purposes
    new Uint8Array(buffer).set(compressed_session_data, 4);

    await cache.set('innertube_session_data', new Uint8Array(buffer));
  }

  static async #getSessionData(options: SessionArgs, fetch: FetchFunction = Platform.shim.fetch): Promise<SWSessionData> {
    let visitor_id = generateRandomString(11);

    if (options.visitor_data)
      visitor_id = this.#getVisitorID(options.visitor_data);

    const url = new URL('/sw.js_data', Constants.URLS.YT_BASE);

    const res = await fetch(url, {
      headers: {
        'Accept-Language': options.lang || 'en-US',
        'User-Agent': getRandomUserAgent('desktop'),
        'Accept': '*/*',
        'Referer': `${Constants.URLS.YT_BASE}/sw.js`,
        'Cookie': `PREF=tz=${options.time_zone.replace('/', '.')};VISITOR_INFO1_LIVE=${visitor_id};`
      }
    });

    if (!res.ok)
      throw new SessionError(`Failed to retrieve session data: ${res.status}`);

    const text = await res.text();

    if (!text.startsWith(')]}\''))
      throw new SessionError('Invalid JSPB response');

    const data = JSON.parse(text.replace(/^\)\]\}'/, ''));

    const ytcfg = data[0][2];

    const api_version = Constants.CLIENTS.WEB.API_VERSION;

    const [ [ device_info ], api_key ] = ytcfg;

    const config_info = device_info[61];
    const app_install_data = config_info[config_info.length - 1];

    const context_info = {
      hl: options.lang || device_info[0],
      gl: options.location || device_info[2],
      remote_host: device_info[3],
      visitor_data: device_info[13],
      client_name: options.client_name,
      client_version: device_info[16],
      os_name: device_info[17],
      os_version: device_info[18],
      time_zone: device_info[79] || options.time_zone,
      device_category: options.device_category,
      browser_name: device_info[86],
      browser_version: device_info[87],
      device_make: device_info[11],
      device_model: device_info[12],
      app_install_data: app_install_data,
      enable_safety_mode: options.enable_safety_mode
    };

    return { context_data: context_info, api_key, api_version };
  }

  static #buildContext(args: ContextData) {
    const context: Context = {
      client: {
        hl: args.hl,
        gl: args.gl,
        remoteHost: args.remote_host,
        screenDensityFloat: 1,
        screenHeightPoints: 1440,
        screenPixelDensity: 1,
        screenWidthPoints: 2560,
        visitorData: args.visitor_data,
        clientName: args.client_name,
        clientVersion: args.client_version,
        osName: args.os_name,
        osVersion: args.os_version,
        platform: args.device_category.toUpperCase(),
        clientFormFactor: 'UNKNOWN_FORM_FACTOR',
        userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
        timeZone: args.time_zone,
        originalUrl: Constants.URLS.YT_BASE,
        deviceMake: args.device_make,
        deviceModel: args.device_model,
        browserName: args.browser_name,
        browserVersion: args.browser_version,
        utcOffsetMinutes: -Math.floor((new Date()).getTimezoneOffset()),
        memoryTotalKbytes: '8000000',
        mainAppWebInfo: {
          graftUrl: Constants.URLS.YT_BASE,
          pwaInstallabilityStatus: 'PWA_INSTALLABILITY_STATUS_UNKNOWN',
          webDisplayMode: 'WEB_DISPLAY_MODE_BROWSER',
          isWebNativeShareAvailable: true
        }
      },
      user: {
        enableSafetyMode: args.enable_safety_mode,
        lockedSafetyMode: false
      },
      request: {
        useSsl: true,
        internalExperimentFlags: []
      }
    };

    if (args.app_install_data)
      context.client.configInfo = { appInstallData: args.app_install_data };

    if (args.on_behalf_of_user)
      context.user.onBehalfOfUser = args.on_behalf_of_user;

    return context;
  }

  static #getVisitorID(visitor_data: string) {
    const decoded_visitor_data = Proto.decodeVisitorData(visitor_data);
    return decoded_visitor_data.id;
  }

  async signIn(credentials?: OAuth2Tokens): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const error_handler: OAuth2AuthErrorEventHandler = (err) => reject(err);

      this.once('auth-error', error_handler);

      this.once('auth', () => {
        this.off('auth-error', error_handler);
        this.logged_in = true;
        resolve();
      });

      try {
        await this.oauth.init(credentials);
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

  get client_version(): string {
    return this.context.client.clientVersion;
  }

  get client_name(): string {
    return this.context.client.clientName;
  }

  get lang(): string {
    return this.context.client.hl;
  }
}