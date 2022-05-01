export = Request;
declare class Request {
    constructor(session: any);
    session: any;
    instance: import("axios").AxiosInstance;
    #private;
}
