import Session, { Context } from "../core/Session";
import Constants from "./Constants";
import { generateSidAuth, getRandomUserAgent, getRuntime, getStringBetweenStrings, InnertubeError, isServer } from "./Utils";

export interface HTTPClientInit {
    baseURL?: string;
}

// Polyfill fetch for node
if (getRuntime() === 'node') {
    const undici = require('undici');
    Reflect.set(globalThis, 'fetch', undici.fetch);
    Reflect.set(globalThis, 'Headers', undici.Headers);
    Reflect.set(globalThis, 'Request', undici.Request);
    Reflect.set(globalThis, 'Response', undici.Response);
    Reflect.set(globalThis, 'FormData', undici.FormData);
    Reflect.set(globalThis, 'File', undici.File);
}

export default class HTTPClient {
    #session: Session;
    #cookie?: string;
    constructor(session: Session, cookie?: string) {
        this.#session = session;
        this.#cookie = cookie;
    }

    async fetch(
        input: URL | Request | string,
        init?: RequestInit & HTTPClientInit,
    ) {
        const innertube_url = Constants.URLS.API.PRODUCTION + this.#session.api_version;
        const baseURL = init?.baseURL || innertube_url; 
        
        const request_url = 
            typeof input === "string" ?
                (!baseURL.endsWith('/') && !input.startsWith('/')) ?
                    new URL(`${baseURL}/${input}`) :
                    new URL(baseURL + input) :
            input instanceof URL ?
                input :
                new URL(input.url, baseURL);

        const headers = 
            init?.headers || 
            (input instanceof Request ? input.headers : new Headers) || 
            new Headers();

        const body =
            init?.body || (input instanceof Request ? input.body : undefined);

        const request_headers = new Headers(headers);

        request_headers.set("Accept", "*/*");
        request_headers.set("Accept-Language", `en-${this.#session.context.client.gl || 'US'}`);
        request_headers.set("x-goog-visitor-id", this.#session.context.client.visitorData || '');
        request_headers.set("x-origin", request_url.origin);
        request_headers.set("x-youtube-client-version", this.#session.context.client.clientVersion || '');

        if (isServer()) {
            request_headers.set('User-Agent', getRandomUserAgent('desktop').userAgent);
            request_headers.set('origin', request_url.origin);
        }

        request_url.searchParams.set("key", this.#session.key);
        request_url.searchParams.set('prettyPrint', 'false');

        const contentType = request_headers.get("Content-Type");

        let request_body = body;


        const is_innertube_req = baseURL === innertube_url;

        // copy context into payload when possible
        if (contentType === "application/json" && is_innertube_req && (typeof body === "string")) {
            const json = JSON.parse(body);
            const n_body = {
                ...json,
                // Deep copy since we're gonna be modifying it
                context: JSON.parse(JSON.stringify(this.#session.context)),
            }
            this.#adjustContext(n_body.context, n_body.client);
            request_headers.set("x-youtube-client-version", n_body.context.client.clientVersion);
            delete n_body.client;
            request_body = JSON.stringify(n_body);
        }

        // authenticate
        if (this.#session.logged_in && is_innertube_req) {
            const oauth = this.#session.oauth;
            if (oauth.validateCredentials()) {
                // Check if the access token is valid to avoid authorization errors.
                await oauth.checkAccessTokenValidity();
                request_headers.set('authorization', `Bearer ${oauth.credentials!.access_token}`);
                // Remove API key as it is not required when using oauth.
                request_url.searchParams.delete("key");
            }
            if (this.#cookie) {
                const papisid = getStringBetweenStrings(this.#cookie, 'PAPISID=', ';');
                if (papisid) {
                    request_headers.set('authorization', await generateSidAuth(papisid));
                }
                request_headers.set('cookie', this.#cookie);
            }
        }

        const request = new Request(request_url, {
            body: request_body,
            headers: request_headers,
            cache: input instanceof Request ? input.cache : undefined,
            credentials: "include",
            redirect: input instanceof Request ? input.redirect : init?.redirect || 'follow',
            // copy the request properties from the input
            integrity: input instanceof Request ? input.integrity : init?.integrity,
            method: input instanceof Request ? input.method : init?.method,
            mode: input instanceof Request ? input.mode : init?.mode,
            referrer: input instanceof Request ? input.referrer : init?.referrer,
            referrerPolicy: input instanceof Request ? input.referrerPolicy : init?.referrerPolicy,
            signal: input instanceof Request ? input.signal : init?.signal,
            keepalive: input instanceof Request ? input.keepalive : init?.keepalive
        });

        const response = await fetch(request);

        // check if 2xx
        if (response.ok) {
            return response;
        } else throw new InnertubeError(`Request to ${response.url} failed with status ${response.status}`, response);
    }

    #adjustContext(ctx: Context, client: string) {
        switch (client) {
            case 'YTMUSIC':
                ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC.VERSION;
                ctx.client.clientName = Constants.CLIENTS.YTMUSIC.NAME;
                break;
            case 'ANDROID':
                ctx.client.clientVersion = Constants.CLIENTS.ANDROID.VERSION;
                ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
                ctx.client.clientName = Constants.CLIENTS.ANDROID.NAME;
                break;
            default:
                break;
        }
    }
}