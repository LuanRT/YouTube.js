export = OAuth;
declare class OAuth {
    constructor(ev: any);
    /**
     * Starts the auth flow in case no valid credentials are available.
     * @returns {Promise.<void>}
     */
    init(auth_info: any): Promise<void>;
    client_id: string;
    client_secret: string;
    /**
     * Refreshes the access token if necessary.
     * @returns {Promise.<void>}
     */
    checkTokenValidity(): Promise<void>;
    /**
     * Revokes access token (note that the refresh token will also be revoked).
     * @returns {Promise.<void>}
     */
    revokeAccessToken(): Promise<void>;
    getAccessToken(): any;
    getRefreshToken(): any;
    /**
     * Checks if the auth info is valid.
     * @returns {boolean} true | false
     */
    isValidAuthInfo(): boolean;
    /**
     * Checks access token validity.
     * @returns {boolean} true | false
     */
    shouldRefreshToken(): boolean;
    #private;
}
