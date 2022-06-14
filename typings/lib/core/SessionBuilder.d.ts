export = SessionBuilder;
/** @namespace */
declare class SessionBuilder {
    /**
     * @param {object} config
     * @param {object} [config.proxy]
     * @param {object} [config.http_agent]
     * @param {object} [config.https_agent]
     */
    constructor(config: {
        proxy?: object;
        http_agent?: object;
        https_agent?: object;
    });
    build(): Promise<SessionBuilder>;
    /** @readonly */
    readonly get axios(): typeof Axios;
    /** @readonly */
    readonly get key(): any;
    /** @readonly */
    readonly get context(): any;
    /** @readonly */
    readonly get api_version(): any;
    /** @readonly */
    readonly get client_version(): any;
    /** @readonly */
    readonly get client_name(): any;
    /** @readonly */
    readonly get player(): any;
    #private;
}
import Axios = require("axios");
