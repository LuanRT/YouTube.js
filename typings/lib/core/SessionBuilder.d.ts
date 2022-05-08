export = SessionBuilder;
declare class SessionBuilder {
    constructor(config: any);
    build(): Promise<SessionBuilder>;
    get key(): any;
    get context(): any;
    get api_version(): any;
    get client_version(): any;
    get client_name(): any;
    get player(): any;
    #private;
}
