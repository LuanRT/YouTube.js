export = OAuth;
/** @namespace */
declare class OAuth {
    /**
     * @param {EventEmitter} ev
     * @param {AxiosInstance} axios
     */
    constructor(ev: EventEmitter, axios: AxiosInstance);
    /**
     * Starts the auth flow in case no valid credentials are available.
     *
     * @param {object} auth_info
     * @param {string} auth_info.access_token
     * @param {string} auth_info.refresh_token
     * @param {Date} auth_info.expires_in
     * @returns {Promise.<void>}
     */
    init(auth_info: {
        access_token: string;
        refresh_token: string;
        expires_in: Date;
    }): Promise<void>;
    client_id: string;
    client_secret: string;
    /**
     * Refreshes the access token if necessary.
     *
     * @returns {Promise.<void>}
     */
    checkTokenValidity(): Promise<void>;
    /**
     * Revokes access token (note that the refresh token will also be revoked).
     *
     * @returns {Promise.<void>}
     */
    revokeAccessToken(): Promise<void>;
    /**
     * Returns the access token.
     *
     * @returns {string}
     */
    getAccessToken(): string;
    /**
     * Returns the refresh token.
     *
     * @returns {string}
     */
    getRefreshToken(): string;
    /**
     * Checks if the auth info format is valid.
     *
     * @returns {boolean} true | false
     */
    isValidAuthInfo(): boolean;
    /**
     * Checks access token validity.
     *
     * @returns {boolean} true | false
     */
    shouldRefreshToken(): boolean;
    #private;
}
