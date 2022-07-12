import Player from "./Player.js";
import Proto from "../proto/index.js";
import { DeviceCategory, generateRandomString, getStringBetweenStrings } from "../utils/Utils.js";
import Constants from "../utils/Constants.js";
import UserAgent from "user-agents";

export interface ISession {
    key: string;
    version: string;
    deviceCategory: DeviceCategory;
    context: Context;
    logged_in: boolean;
    // TODO:
    oauth: any //OAuth;
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
        osName: string;
        osVersion: string;
        platform: string;
        clientFormFactor: string;
        userInterfaceTheme: string;
        timeZone: string;
        browserName: string;
        browserVersion: string;
        originalUrl: string;
    };
    user: {
        lockedSafetyMode: false;
    };
    request: {
        useSsl: true;
    };
};

export class SessionBuilder {
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
        const id = generateRandomString(11);
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
     */
    async #getYtConfig() {
        const response = await this.#request.get(`${Constants.URLS.YT_BASE}/sw.js_data`);
        return JSON.parse(response.data.replace(')]}\'', ''));
    }
    /**
     * Retrieves the YouTube player id.
     */
    async #getPlayerId() {
        const response = await this.#request.get(`${Constants.URLS.YT_BASE}/iframe_api`);
        return getStringBetweenStrings(response.data, 'player\\/', '\\/');
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
export default SessionBuilder;
