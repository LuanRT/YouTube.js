import { FetchFunction } from '../utils/HTTPClient';
import { getRandomUserAgent, getStringBetweenStrings, PlayerError } from '../utils/Utils';

import Constants from '../utils/Constants';
import UniversalCache from '../utils/Cache';


// Import NToken from '../deciphers/NToken';
// Import Signature from '../deciphers/Signature';

export default class Player {
  // #ntoken;
  // #signature;

  #signature_timestamp;
  #player_id;

  constructor(signature_timestamp: number, player_id: string) {
    // This.#ntoken = ntoken;
    // This.#signature = signature;

    this.#signature_timestamp = signature_timestamp;

    this.#player_id = player_id;
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

    // We have the playerID now we can check if we have a cached player
    if (cache) {
      const cached_player = await Player.fromCache(cache, player_id);
      if (cached_player)
        return cached_player;
    }

    const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE);

    const player_res = await fetch(player_url, {
      headers: {
        'user-agent': getRandomUserAgent('desktop')
      }
    });

    if (!player_res.ok) {
      throw new PlayerError(`Failed to get player data: ${player_res.status}`);
    }

    const player_js = await player_res.text();

    const sig_timestamp = this.extractSigTimestamp(player_js);

    // Const sig_decipher_sc = this.extractSigDecipherSc(player_js);
    // Const ntoken_sc = this.extractNTokenSc(player_js);

    return await Player.fromSource(cache, sig_timestamp, player_id);
  }

  /*
  Decipher(url?: string, signature_cipher?: string, cipher?: string) {
    url = url || signature_cipher || cipher;

    if (!url)
      throw new PlayerError('No valid URL to decipher');

    const args = new URLSearchParams(url);
    const url_components = new URL(args.get('url') || url);

    url_components.searchParams.set('ratebypass', 'yes');

    if (signature_cipher || cipher) {
      const signature = this.#signature.decipher(url);
      const sp = args.get('sp');

      sp ?
        url_components.searchParams.set(sp, signature) :
        url_components.searchParams.set('signature', signature);
    }

    const n = url_components.searchParams.get('n');

    if (n) {
      const ntoken = this.#ntoken.transform(n);
      url_components.searchParams.set('n', ntoken);
    }

    return url_components.toString();
  }*/

  static async fromCache(cache: UniversalCache, player_id: string) {
    const buffer = await cache.get(player_id);

    if (!buffer)
      return null;

    const view = new DataView(buffer);
    const version = view.getUint32(0, true);

    if (version !== Player.LIBRARY_VERSION)
      return null;

    const sig_timestamp = view.getUint32(4, true);

    /*
     * Const sig_decipher_len = view.getUint32(8, true);
     * const sig_decipher_buf = buffer.slice(12, 12 + sig_decipher_len);
     * const ntoken_transform_buf = buffer.slice(12 + sig_decipher_len);
     */

    return new Player(sig_timestamp, player_id);
  }

  static async fromSource(cache: UniversalCache | undefined, sig_timestamp: number, player_id: string) {
    const player = new Player(sig_timestamp, player_id);
    await player.cache(cache);
    return player;
  }

  async cache(cache?: UniversalCache) {
    if (!cache) return;

    /**
     * Const ntoken_buf = this.#ntoken.toArrayBuffer();
     * const sig_decipher_buf = this.#signature.toArrayBuffer();
     */

    const buffer = new ArrayBuffer(12 /* + sig_decipher_buf.byteLength + ntoken_buf.byteLength */);
    const view = new DataView(buffer);

    view.setUint32(0, Player.LIBRARY_VERSION, true);
    view.setUint32(4, this.#signature_timestamp, true);

    // View.setUint32(8, sig_decipher_buf.byteLength, true);

    // New Uint8Array(buffer).set(new Uint8Array(sig_decipher_buf), 12);
    // New Uint8Array(buffer).set(new Uint8Array(ntoken_buf), 12 + sig_decipher_buf.byteLength);

    await cache.set(this.#player_id, new Uint8Array(buffer));
  }

  /**
   * Extracts the signature timestamp from the player source code.
   */
  static extractSigTimestamp(data: string) {
    return parseInt(getStringBetweenStrings(data, 'signatureTimestamp:', ',') || '0');
  }

  /**
   * Extracts the signature decipher algorithm.
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
   */
  static extractNTokenSc(data: string) {
    const sc = `var b=a.split("")${getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join("");`;

    console.log(sc);
    if (!sc)
      throw new PlayerError('Failed to extract n-token decipher algorithm');

    return sc;
  }

  get url() {
    return new URL(`/s/player/${this.#player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE).toString();
  }

  get sts() {
    return this.#signature_timestamp;
  }

  static get LIBRARY_VERSION() {
    return 1;
  }
}