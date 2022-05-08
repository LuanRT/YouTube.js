export = NToken;
declare class NToken {
    constructor(raw_code: any, n: any);
    n: any;
    raw_code: any;
    /**
     * Solves throttling challange by transforming the n token.
     * @returns {string}
     */
    transform(): string;
    #private;
}
