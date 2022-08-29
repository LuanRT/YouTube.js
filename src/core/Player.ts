
import { FetchFunction } from '../utils/HTTPClient';
import { getRandomUserAgent, getStringBetweenStrings, PlayerError } from '../utils/Utils';

import Constants from '../utils/Constants';
import UniversalCache from '../utils/Cache';

// See https://github.com/LuanRT/Jinter
import Jinter from 'jintr';

export default class Player {
  #nsig_sc;
  #sig_sc;
  #sig_sc_timestamp;
  #player_id;

  constructor(signature_timestamp: number, sig_sc: string, nsig_sc: string, player_id: string) {
    this.#nsig_sc = nsig_sc;
    this.#sig_sc = sig_sc;

    this.#sig_sc_timestamp = signature_timestamp;

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

    const sig_sc = this.extractSigSourceCode(player_js);
    const nsig_sc = this.extractNSigSourceCode(player_js);

    return await Player.fromSource(cache, sig_timestamp, sig_sc, nsig_sc, player_id);
  }

  decipher(url?: string, signature_cipher?: string, cipher?: string) {
    url = url || signature_cipher || cipher;

    if (!url)
      throw new PlayerError('No valid URL to ');

    const args = new URLSearchParams(url);
    const url_components = new URL(args.get('url') || url);

    url_components.searchParams.set('ratebypass', 'yes');

    if (signature_cipher || cipher) {
      const sig_decipher = new Jinter(this.#sig_sc);
      sig_decipher.scope.set('sig', args.get('s'));

      const signature = sig_decipher.interpret();

      const sp = args.get('sp');

      sp ?
        url_components.searchParams.set(sp, signature) :
        url_components.searchParams.set('signature', signature);
    }

    const n = url_components.searchParams.get('n');

    if (n) {
      const nsig_decipher = new Jinter(this.#nsig_sc);
      nsig_decipher.scope.set('nsig', n);

      const nsig = nsig_decipher.interpret();

      if (nsig.startsWith('enhanced_except_')) {
        console.warn('Warning:\nCould not transform nsig, download may be throttled.\nChanging the InnerTube client to "ANDROID" might help!');
      }

      url_components.searchParams.set('n', nsig);
    }

    return url_components.toString();
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

    const sig_len = view.getUint32(8, true);
    const sig_buf = buffer.slice(12, 12 + sig_len);
    const nsig_buf = buffer.slice(12 + sig_len);

    const decoder = new TextDecoder();

    const sig_sc = decoder.decode(sig_buf);
    const nsig_sc = decoder.decode(nsig_buf);

    return new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
  }

  static async fromSource(cache: UniversalCache | undefined, sig_timestamp: number, sig_sc: string, nsig_sc: string, player_id: string) {
    const player = new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
    await player.cache(cache);
    return player;
  }

  async cache(cache?: UniversalCache) {
    if (!cache) return;

    const encoder = new TextEncoder();

    const sig_buf = encoder.encode(this.#sig_sc);
    const nsig_buf = encoder.encode(this.#nsig_sc);

    const buffer = new ArrayBuffer(12 + sig_buf.byteLength + nsig_buf.byteLength);
    const view = new DataView(buffer);

    view.setUint32(0, Player.LIBRARY_VERSION, true);
    view.setUint32(4, this.#sig_sc_timestamp, true);
    view.setUint32(8, sig_buf.byteLength, true);

    new Uint8Array(buffer).set(sig_buf, 12);
    new Uint8Array(buffer).set(nsig_buf, 12 + sig_buf.byteLength);

    await cache.set(this.#player_id, new Uint8Array(buffer));
  }

  static extractSigTimestamp(data: string) {
    return parseInt(getStringBetweenStrings(data, 'signatureTimestamp:', ',') || '0');
  }

  static extractSigSourceCode(data: string) {
    const funcs = getStringBetweenStrings(data, 'this.audioTracks};var', '};');
    const calls = getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');

    if (!funcs || !calls)
      throw new PlayerError('Failed to extract signature decipher algorithm');

    return `function scramble_sig(a) { a = a.split(""); ${funcs}}${calls} return a.join("") } scramble_sig(sig);`;
  }

  static extractNSigSourceCode(data: string) {
    const sc = `function scramble_nsig(a) { let b=a.split("")${getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join(""); } scramble_nsig(nsig)`;

    if (!sc)
      throw new PlayerError('Failed to extract n-token decipher algorithm');

    return sc;
  }

  get url() {
    return new URL(`/s/player/${this.#player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE).toString();
  }

  get sts() {
    return this.#sig_sc_timestamp;
  }

  get nsig_sc() {
    return this.#nsig_sc;
  }

  get sig_sc() {
    return this.#sig_sc;
  }

  static get LIBRARY_VERSION() {
    return 2;
  }
}