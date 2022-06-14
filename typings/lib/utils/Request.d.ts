export = Request;
/** @namespace */
declare class Request {
    /**
     * @param {Innertube} session
     * @constructor
     */
    constructor(session: Innertube);
    session: Innertube;
    instance: any;
    #private;
}
