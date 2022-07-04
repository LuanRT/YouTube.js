export = SessionBuilder;
/** @namespace */
declare class SessionBuilder {
    /**
     * @param {object} config
     * @param {object} request
     */
    constructor(config: object, request: object);
    build(): Promise<SessionBuilder>;
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
