'use strict';

import { getStringBetweenStrings, getTmpdir, throwIfMissing } from '../utils/Utils';
import Constants from '../utils/Constants';
import Signature from '../deciphers/Signature';
import NToken from '../deciphers/NToken';
import type Request from '../utils/Request';
const Cache = BROWSER ? require('../utils/wrappers/BrowserCache') : require('../utils/wrappers/NodeCache');

/** @namespace */
class Player {
  #request;
  #player_id;
  #player_url;
  #player_path;

  #ntoken;
  #signature;
  #signature_timestamp;
  #cache_dir;

  /**
   * Represents the YouTube Web player script.
   *
   * @param id - the id of the player.
   * @param request
   */
  constructor(id: string, request: Request) {
    this.#player_id = id;
    this.#request = request;
    this.#cache_dir = `${getTmpdir()}/yt-cache`;
    this.#player_url = `${Constants.URLS.YT_BASE}/s/player/${this.#player_id}/player_ias.vflset/en_US/base.js`;
    this.#player_path = `${this.#cache_dir}/${this.#player_id}.bin`;
  }

  async init() {
    if (await this.isCached()) {
      const buffer = await Cache.read(this.#player_path);
      const view = new DataView(buffer);
      const version = view.getUint32(0, true);

      if (version == Player.LIBRARY_VERSION) {
        const sig_decipher_len = view.getUint32(8, true);
        const sig_decipher_buf = buffer.slice(12, 12 + sig_decipher_len);
        const ntoken_transform_buf = buffer.slice(12 + sig_decipher_len);

        this.#ntoken = NToken.fromArrayBuffer(ntoken_transform_buf);
        this.#signature = Signature.fromArrayBuffer(sig_decipher_buf);
        this.#signature_timestamp = view.getUint32(4, true);

        return this;
      }
    }

    const response = await this.#request.get(this.#player_url, { headers: { 'content-type': 'text/javascript' } });

    this.#signature_timestamp = this.#extractSigTimestamp(response.data);

    const signature_decipher_sc = this.#extractSigDecipherSc(response.data);
    const ntoken_decipher_sc = this.#extractNTokenSc(response.data);

    this.#signature = Signature.fromSourceCode(signature_decipher_sc);
    this.#ntoken = NToken.fromSourceCode(ntoken_decipher_sc);

    try {
      // Delete the old player
      await Cache.exists(this.#cache_dir) && await Cache.remove(this.#cache_dir, { recursive: true });

      const ntoken_buf = this.#ntoken.toArrayBuffer();
      const sig_decipher_buf = this.#signature.toArrayBuffer();
      const buffer = new ArrayBuffer(12 + sig_decipher_buf.byteLength + ntoken_buf.byteLength);

      const view = new DataView(buffer);
      view.setUint32(0, Player.LIBRARY_VERSION, true);
      view.setUint32(4, this.#signature_timestamp, true);
      view.setUint32(8, sig_decipher_buf.byteLength, true);

      new Uint8Array(buffer).set(new Uint8Array(sig_decipher_buf), 12);
      new Uint8Array(buffer).set(new Uint8Array(ntoken_buf), 12 + sig_decipher_buf.byteLength);

      // Cache the current player
      await Cache.write(this.#player_path, new Uint8Array(buffer));
    } finally { /* Do nothing */ }

    return this;
  }

  decipher(url, signature_cipher, cipher) {
    url = url || signature_cipher || cipher;

    throwIfMissing({ url });

    const args = new URLSearchParams(url);
    const url_components = new URL(args.get('url') || url);

    url_components.searchParams.set('ratebypass', 'yes');

    if (signature_cipher || cipher) {
      const signature = this.#signature.decipher(url);
      args.get('sp') ?
        url_components.searchParams.set(args.get('sp'), signature) :
        url_components.searchParams.set('signature', signature);
    }

    if (url_components.searchParams.get('n')) {
      const ntoken = this.#ntoken.transform(url_components.searchParams.get('n'));
      url_components.searchParams.set('n', ntoken);
    }

    return url_components.toString();
  }

  /**
   * Js player url.
   * 
   */
  get url(): string {
    return this.#player_url;
  }

  /**
   * Signature timestamp.
   * 
   */
  get sts(): string {
    return this.#signature_timestamp;
  }

  static get LIBRARY_VERSION() {
    return 1;
  }

  /**
   * Extracts the signature timestamp from the player source code.
   * @param data
   * 
   */
  #extractSigTimestamp(data: any): number {
    return parseInt(getStringBetweenStrings(data, 'signatureTimestamp:', ','));
  }

  /**
   * Extracts the signature decipher algorithm.
   * @param data
   * 
   */
  #extractSigDecipherSc(data: any): string {
    const sig_alg_sc = getStringBetweenStrings(data, 'this.audioTracks};var', '};');
    const sig_data = getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
    return sig_alg_sc + sig_data;
  }

  /**
   * Extracts the n-token decipher algorithm.
   * @param data
   * 
   */
  #extractNTokenSc(data: any): string {
    return `var b=a.split("")${getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join("");`;
  }

  /**
   * Checks if the player script is cached.
   *
   * 
   */
  async isCached(): Promise<boolean> {
    return await Cache.exists(this.#player_path);
  }
}

export default Player;