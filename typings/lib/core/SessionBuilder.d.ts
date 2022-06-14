export = SessionBuilder;
/** @namespace */
declare class SessionBuilder {
    /**
     * @param {object} config
     * @constructor
     */
    constructor(config: object);
    build(): Promise<SessionBuilder>;
    /** @readonly */
    readonly get axios(): AxiosInstance;
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
