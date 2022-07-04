export = OAuth;
declare class OAuth {
    /**
     * @param {EventEmitter} ev
     * @param {AxiosInstance} request
     */
    constructor(ev: EventEmitter, request: AxiosInstance);
    /**
     * Starts the auth flow in case no valid credentials are available.
     * @param {object} credentials
     * @param {string} credentials.access_token
     * @param {string} credentials.refresh_token
     * @param {Date} credentials.expires_in
     */
    init(credentials: {
        access_token: string;
        refresh_token: string;
        expires_in: Date;
    }): void;
    /**
     * Refreshes the access token if necessary.
     * @returns {Promise.<void>}
     */
    checkAccessTokenValidity(): Promise<void>;
    /**
     * Revokes credentials.
     * @returns {Promise.<{ success: boolean, status_code: number }>}
     */
    revokeCredentials(): Promise<{
        success: boolean;
        status_code: number;
    }>;
    /**
     * @returns {{ access_token: string, refresh_token: string, expires: Date }}
     */
    get credentials(): {
        access_token: string;
        refresh_token: string;
        expires: Date;
    };
    /**
     * Validates the credentials.
     * @returns {boolean}
     */
    validateCredentials(): boolean;
    #private;
}
