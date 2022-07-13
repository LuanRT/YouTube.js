import Player from "./Player.js";
import Proto from "../proto/index.js";
import { DeviceCategory, generateRandomString, getRandomUserAgent, SessionError } from "../utils/Utils.js";
import Constants from "../utils/Constants.js";
import UniversalCache from "../utils/Cache.js";

export interface Context {
    client: {
        hl: string;
        gl: string;
        remoteHost: string;
        visitorData: string;
        userAgent: string;
        clientName: string;
        clientVersion: string;
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
    user: {
        lockedSafetyMode: false;
    };
    request: {
        useSsl: true;
    };
};

export enum ClientType {
    WEB = "WEB",
    MUSIC = "WEB_REMIX",
    ANDROID = "ANDROID",
}

export interface SessionOptions {
    lang?: string;
    device_category?: DeviceCategory;
    client_type?: ClientType;
    timezone?: string;
    cache?: UniversalCache;
}

export default class Session {
    #api_version;
    #key;
    #context;
    #player;
    constructor(context: Context, api_key: string, api_version: string, player: Player) {
        this.#context = context;
        this.#key = api_key;
        this.#api_version = api_version;
        this.#player = player;
    }
    static async create(options: SessionOptions = {}) {
        const { context, api_key, api_version } = await Session.getSessionData(options.lang, options.device_category, options.client_type, options.timezone);
        return new Session(context, api_key, api_version, await Player.create(options.cache));
    }
    static async getSessionData(
        lang: string = 'en-US', 
        deviceCategory: DeviceCategory = 'desktop', 
        clientName: ClientType = ClientType.WEB, 
        tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone
    ) {
        const res = await fetch(new URL('/sw.js_data', Constants.URLS.YT_BASE), {
            headers: {
                'accept-language': lang,
                'user-agent': getRandomUserAgent('desktop').userAgent,
                'accept': '*/*',
                'referer': 'https://www.youtube.com/sw.js',
                'cookie': 'PREF=tz=' + tz.replace('/', '.')
            }
        });

        if (!res.ok) {
            throw new SessionError(`Failed to get session data: ${res.status}`);
        }

        const text = await res.text();

        const data = JSON.parse(text.replace(/^)]}'/, ''));

        const ytcfg = data[0][2];

        const api_version = 'v' + ytcfg[0][0][6];

        const [[device_info], api_key] = ytcfg;

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
                clientName,
                clientVersion: device_info[16],
                osName: device_info[17],
                osVersion: device_info[18],
                platform: deviceCategory.toUpperCase(),
                clientFormFactor: "UNKNOWN_FORM_FACTOR",
                userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
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

        return {
            context,
            api_key,
            api_version
        };
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
