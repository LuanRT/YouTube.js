import Constants from "../utils/Constants.js";
import { OAuthError, uuidv4 } from "../utils/Utils.js";
import Session from "./Session.js";

export interface Credentials {
    /**
     * Token used to sign in.
     */
    access_token: string;
    /**
     * Token used to get a new access token.
     */
    refresh_token: string;
    /**
     * Access token's expiration date, which is usually 24hrs-ish.
     */
    expires: Date;
}

class OAuth {
    #identity?: Record<string, string>;
    #session: Session;
    #credentials?: Credentials;
    #polling_interval = 5;
    constructor(session: Session) {
        this.#session = session;
    }
    /**
     * Starts the auth flow in case no valid credentials are available.
     * @param {object} credentials
     * @param {string} credentials.access_token
     * @param {string} credentials.refresh_token
     * @param {Date} credentials.expires_in
     */
    async init(credentials?: Credentials) {
        this.#credentials = credentials;
        if (!credentials) {
            await this.#getUserCode();
        }
    }
    /**
     * Asks the server for a user code and verification URL.
     * @returns {Promise.<void>}
     */
    async #getUserCode() {
        this.#identity = await this.#getClientIdentity();
        const data = {
            client_id: this.#identity.client_id,
            scope: Constants.OAUTH.SCOPE,
            device_id: uuidv4(),
            model_name: Constants.OAUTH.MODEL_NAME
        };
        const response = await this.#session.http.fetch_function(new URL('/o/oauth2/device/code', Constants.URLS.YT_BASE), {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response_data = await response.json();
        this.#session.emit('auth', {
            ...response_data,
            status: 'AUTHORIZATION_PENDING'
        });
        this.#polling_interval = response_data.interval;
        this.#startPolling(response_data.device_code);
    }
    /**
     * Polls the authorization server until access is granted by the user.
     */
    #startPolling(device_code: string) {
        const poller = setInterval(async () => {
            const data = {
                ...this.#identity,
                code: device_code,
                grant_type: Constants.OAUTH.GRANT_TYPE
            };
            try {
                const response = await this.#session.http.fetch_function(new URL('/o/oauth2/token', Constants.URLS.YT_BASE), {
                    body: JSON.stringify(data),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const response_data = await response.json();
                if (response_data.error) {
                    switch (response_data.error) {
                        case 'access_denied':
                            this.#session.emit('auth', new OAuthError('Access was denied.', { status: 'ACCESS_DENIED' }));
                            break;
                        case 'expired_token':
                            this.#session.emit('auth', new OAuthError('The device code has expired, restarting auth flow.', { status: 'DEVICE_CODE_EXPIRED' }));
                            clearInterval(poller);
                            this.#getUserCode();
                            break;
                        default:
                            break;
                    }
                    return;
                }
                const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1000);
                this.#credentials = {
                    access_token: response_data.access_token,
                    refresh_token: response_data.refresh_token,
                    expires: expiration_date
                };
                this.#session.emit('auth', {
                    credentials: this.#credentials,
                    status: 'SUCCESS'
                });
                clearInterval(poller);
            } catch (err) {
                clearInterval(poller);
                return this.#session.emit('auth', new OAuthError('Could not obtain user code.', { status: 'FAILED', error: err }));
            }
        }, this.#polling_interval * 1000);
    }
    /**
     * Refreshes the access token if necessary.
     * @returns {Promise.<void>}
     */
    async checkAccessTokenValidity() {
        const timestamp = this.#credentials ? new Date(this.#credentials.expires).getTime() : -Infinity;
        if (new Date().getTime() > timestamp) {
            await this.#refreshAccessToken();
        }
    }
    /**
     * Retrieves a new access token using the refresh token.
     * @returns {Promise.<void>}
     */
    async #refreshAccessToken() {
        if (!this.#credentials) return;
        this.#identity = await this.#getClientIdentity();
        const data = {
            ...this.#identity,
            refresh_token: this.#credentials.refresh_token,
            grant_type: 'refresh_token'
        };
        const response = await this.#session.http.fetch_function(new URL('/o/oauth2/token', Constants.URLS.YT_BASE), {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response instanceof Error) {
            const error = new OAuthError('Could not refresh access token.', { status: 'FAILED' });
            this.#session.emit('update-credentials', error);
            throw error;
        }
        const response_data = await response.json();
        const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1000);
        this.#credentials = {
            access_token: response_data.access_token,
            refresh_token: response_data.refresh_token || this.#credentials.refresh_token,
            expires: expiration_date
        };
        this.#session.emit('update-credentials', {
            credentials: this.#credentials,
            status: 'SUCCESS'
        });
    }
    /**
     * Revokes credentials.
     */
    revokeCredentials() {
        if (!this.#credentials) return;
        return this.#session.http.fetch_function(new URL('/o/oauth2/revoke?token=' + encodeURIComponent(this.#credentials.access_token), Constants.URLS.YT_BASE), {
            method: 'post'
        });
    }
    /**
     * Retrieves client identity from YouTube TV.
     * @returns {Promise.<{ client_id: string, client_secret: string }>}
     */
    async #getClientIdentity() {
        const response = await this.#session.http.fetch_function(new URL('/tv', Constants.URLS.YT_BASE), {
            headers: Constants.OAUTH.HEADERS
        });
        const response_data = await response.text();
        const url_body = Constants.OAUTH.REGEX.AUTH_SCRIPT.exec(response_data)![1]; // TODO: probably check this rather than assume.
        const script = await this.#session.http.fetch(url_body, { 
            baseURL: Constants.URLS.YT_BASE 
        });
        const client_identity = (await script.text())
            .replace(/\n/g, '')
            .match(Constants.OAUTH.REGEX.CLIENT_IDENTITY);
        // TODO: check this.
        return client_identity!.groups!;
    }
    get credentials() {
        return this.#credentials;
    }
    validateCredentials() {
        return this.#credentials && 
            Reflect.has(this.#credentials, 'access_token') &&
            Reflect.has(this.#credentials, 'refresh_token') &&
            Reflect.has(this.#credentials, 'expires');
    }
}
export default OAuth;
