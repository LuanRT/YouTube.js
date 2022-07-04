export = Request;
declare class Request {
    constructor(config: any);
    config: any;
    setSession(session: any): void;
    /**
     * Returns the axios instance.
     * @returns {Axios.AxiosInstance}
     */
    get instance(): Axios.AxiosInstance;
    #private;
}
import Axios = require("axios");
