import { getRandomUserAgent, getStringBetweenStrings, PlayerError } from "../utils/Utils.js";
import Constants from "../utils/Constants.js";
import Signature from "../deciphers/Signature";
import NToken from "../deciphers/NToken";
import UniversalCache from "../utils/Cache.js";
import { FetchFunction } from "../utils/HTTPClient.js";

export default class Player {
    #ntoken;
    #signature;
    #signature_timestamp;
    #player_id;
    constructor(signature: Signature, ntoken: NToken, signature_timestamp: number, player_id: string) {
        this.#ntoken = ntoken;
        this.#signature = signature;
        this.#signature_timestamp = signature_timestamp;
        this.#player_id = player_id;
    }
    static async fromCache(cache: UniversalCache, player_id: string) {
        const buffer = await cache.get(player_id);
        if (!buffer)
            return null;
        const view = new DataView(buffer);
        const version = view.getUint32(0, true);
        if (version !== Player.LIBRARY_VERSION)
            return null;
        const sig_timestamp = view.getUint32(4, true);
        const sig_decipher_len = view.getUint32(8, true);
        const sig_decipher_buf = buffer.slice(12, 12 + sig_decipher_len);
        const ntoken_transform_buf = buffer.slice(12 + sig_decipher_len);

        return new Player(Signature.fromArrayBuffer(sig_decipher_buf), NToken.fromArrayBuffer(ntoken_transform_buf), sig_timestamp, player_id);
    }
    static async fromSource(cache: UniversalCache | undefined, sig_timestamp: number, sig_decipher_sc: string, ntoken_sc: string, player_id: string) {
        const player = new Player(Signature.fromSourceCode(sig_decipher_sc), NToken.fromSourceCode(ntoken_sc), sig_timestamp, player_id);
        await player.cache(cache);
        return player;
    }
    async cache(cache?: UniversalCache) {
        if (!cache)
            return;
        const ntokenBuf = this.#ntoken.toArrayBuffer();
        const sigDecipherBuf = this.#signature.toArrayBuffer();
        const buffer = new ArrayBuffer(12 + sigDecipherBuf.byteLength + ntokenBuf.byteLength);
        const view = new DataView(buffer);
        view.setUint32(0, Player.LIBRARY_VERSION, true);
        view.setUint32(4, this.#signature_timestamp, true);
        view.setUint32(8, sigDecipherBuf.byteLength, true);
        new Uint8Array(buffer).set(new Uint8Array(sigDecipherBuf), 12);
        new Uint8Array(buffer).set(new Uint8Array(ntokenBuf), 12 + sigDecipherBuf.byteLength);
        await cache.set(this.#player_id, new Uint8Array(buffer));
    }
    decipher(url?: string, signature_cipher?: string, cipher?: string) {
        url = url || signature_cipher || cipher;
        if (!url)
            throw new PlayerError('No valid URL to decipher');
        const args = new URLSearchParams(url);
        const url_components = new URL(args.get('url') || url);
        url_components.searchParams.set('ratebypass', 'yes');
        if (signature_cipher || cipher) {
            const signature = this.#signature.decipher(url);
            args.get('sp') ?
                url_components.searchParams.set(args.get('sp')!, signature) :
                url_components.searchParams.set('signature', signature);
        }
        if (url_components.searchParams.get('n')) {
            const ntoken = this.#ntoken.transform(url_components.searchParams.get('n')!);
            url_components.searchParams.set('n', ntoken);
        }
        return url_components.toString();
    }
    get url() {
        return new URL(`/s/player/${this.#player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE).toString();
    }
    get sts() {
        return this.#signature_timestamp;
    }
    static async create(cache: UniversalCache | undefined, fetch: FetchFunction = globalThis.fetch) {
        const url = new URL('/iframe_api', Constants.URLS.YT_BASE);
        const res = await fetch(url);

        if (res.status !== 200)
            throw new PlayerError('Failed to request player id');

        const js = await res.text();

        const player_id = getStringBetweenStrings(js, 'player\\/', '\\/');

        if (!player_id) 
            throw new PlayerError('Failed to get player id');

        // we have the playerID now we can check if we have a cached player
        if (cache) {
            const cachedPlayer = await Player.fromCache(cache, player_id);
            if (cachedPlayer)
                return cachedPlayer;
        } 

        const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE);

        const player_res = await fetch(player_url, {
            headers: { 
                'user-agent': getRandomUserAgent('desktop').userAgent,
            }
        });

        if (!player_res.ok) {
            throw new PlayerError(`Failed to get player data: ${player_res.status}`);
        }

        const player_js = await player_res.text();

        const sig_timestamp = this.extractSigTimestamp(player_js);
        const sig_decipher_sc = this.extractSigDecipherSc(player_js);
        const ntoken_sc = this.extractNTokenSc(player_js);

        return await Player.fromSource(cache, sig_timestamp, sig_decipher_sc, ntoken_sc, player_id);
    }
    /**
     * Extracts the signature timestamp from the player source code.
     * @param {*} data
     * @returns {number}
     */
    static extractSigTimestamp(data: string) {
        return parseInt(getStringBetweenStrings(data, 'signatureTimestamp:', ',') || '0');
    }
    /**
     * Extracts the signature decipher algorithm.
     * @param {*} data
     * @returns {string}
     */
    static extractSigDecipherSc(data: string) {
        const sig_alg_sc = getStringBetweenStrings(data, 'this.audioTracks};var', '};');
        const sig_data = getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
        if (!sig_alg_sc || !sig_data)
            throw new PlayerError('Failed to extract signature decipher algorithm');
        return sig_alg_sc + sig_data;
    }
    /**
     * Extracts the n-token decipher algorithm.
     * @param {*} data
     * @returns {string}
     */
    static extractNTokenSc(data: string) {
        const sc = `var b=a.split("")${getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join("");`;
        if (!sc)
            throw new PlayerError('Failed to extract n-token decipher algorithm');
        return sc;
    }
    static get LIBRARY_VERSION() {
        return 1;
    }
}
