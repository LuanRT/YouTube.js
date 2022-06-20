'use strict';

const os = require('os');
const Fs = require('fs');
const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');
const { default: Signature } = require('../deciphers/Signature');
const { default: NToken } = require('../deciphers/NToken');

/** @namespace */
class Player {
  /**
   * @type {AxiosInstance}
   */
  #axios;
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
   * @param {string} id - the id of the player.
   * @param {AxiosInstance} axios
   */
  constructor(id, axios) {
    this.#player_id = id;
    this.#axios = axios;
    this.#cache_dir = `${os.tmpdir()}/yt-cache`;
    this.#player_url = Constants.URLS.YT_BASE + '/s/player/' + this.#player_id + '/player_ias.vflset/en_US/base.js';
    this.#player_path = `${this.#cache_dir}/${this.#player_id}.bin`;
  }

  async init() {
    if (this.isCached()) {
      const buffer = (await Fs.promises.readFile(this.#player_path)).buffer;
      const view = new DataView(buffer);
      const version = view.getUint32(0, true);
        if (version == Player.LIBRARY_VERSION) {
          this.#signature_timestamp = view.getUint32(4, true);
          const sigDecipherLen = view.getUint32(8, true);
          const sigDecipherBuf = buffer.slice(12, 12 + sigDecipherLen);
          const ntokenTransformBuf = buffer.slice(12 + sigDecipherLen);
          this.#ntoken = NToken.fromArrayBuffer(ntokenTransformBuf);
          this.#signature = Signature.fromArrayBuffer(sigDecipherBuf);

          return this;
        }
    }

    const response = await this.#axios.get(this.#player_url, { headers: { 'content-type': 'text/javascript', 'user-agent': Utils.getRandomUserAgent('desktop').userAgent } }).catch((error) => error);
    if (response instanceof Error) throw new Utils.InnertubeError('Could not download js player', { player_id: this.#player_id });
    
    this.#signature_timestamp = this.#extractSigTimestamp(response.data);
    const signature_decipher_sc = this.#extractSigDecipherSc(response.data);
    const ntoken_decipher_sc = this.#extractNTokenSc(response.data);
    this.#signature = Signature.fromSourceCode(signature_decipher_sc);
    this.#ntoken = NToken.fromSourceCode(ntoken_decipher_sc);
  
    try {
      // Delete the old player
      Fs.existsSync(this.#cache_dir) && await Fs.promises.rm(this.#cache_dir, { recursive: true });
      
      const ntokenBuf = this.#ntoken.toArrayBuffer();
      const sigDecipherBuf = this.#signature.toArrayBuffer();
      const buffer = new ArrayBuffer(12 + sigDecipherBuf.byteLength + ntokenBuf.byteLength);
      const view = new DataView(buffer);
      view.setUint32(0, Player.LIBRARY_VERSION, true);
      view.setUint32(4, this.#signature_timestamp, true);
      view.setUint32(8, sigDecipherBuf.byteLength, true);
      new Uint8Array(buffer).set(new Uint8Array(sigDecipherBuf), 12);
      new Uint8Array(buffer).set(new Uint8Array(ntokenBuf), 12 + sigDecipherBuf.byteLength);

      // Cache the current player
      await Fs.promises.mkdir(this.#cache_dir, { recursive: true });
      await Fs.promises.writeFile(this.#player_path, new Uint8Array(buffer));
    } finally { /* do nothing */ }
  
    return this;
  }

  static get LIBRARY_VERSION() {
    return 1;
  }

  decipher(url, signature_cipher, cipher) {
    url = url || signature_cipher || cipher;
    Utils.throwIfMissing({ url });
    
    const args = new URLSearchParams(url);
    const urlComponents = new URL(args.get('url') || url);

    urlComponents.searchParams.set('ratebypass', 'yes');

    if (signature_cipher || cipher) {
      const signature = this.#signature.decipher(url);
      args.get('sp') ? 
        urlComponents.searchParams.set(args.get('sp'), signature) :
        urlComponents.searchParams.set('signature', signature);
    }

    if (urlComponents.searchParams.get('n')) {
      const ntoken = this.#ntoken.transform(urlComponents.searchParams.get('n'));
      urlComponents.searchParams.set('n', ntoken);
    }

    return urlComponents.toString();
  }
  
  /**
   * Js player url.
   *
   * @readonly
   * @returns {string}
   */
  get url() {
    return this.#player_url;
  }
  
  /**
   * Signature timestamp.
   *
   * @readonly
   * @returns {string}
   */
  get sts() {
    return this.#signature_timestamp;
  }
  
  /**
   * Extracts the signature timestamp from the player source code.
   *
   * @param {*} data
   * @returns {number}
   */
  #extractSigTimestamp(data) {
    return parseInt(Utils.getStringBetweenStrings(data, 'signatureTimestamp:', ','));
  }
  
  /**
   * Extracts the signature decipher algorithm.
   *
   * @param {*} data
   * @returns {string}
   */
  #extractSigDecipherSc(data) {
    const sig_alg_sc = Utils.getStringBetweenStrings(data, 'this.audioTracks};var', '};');
    const sig_data = Utils.getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
    return sig_alg_sc + sig_data;
  }
  
  /**
   * Extracts the n-token decipher algorithm.
   *
   * @param {*} data
   * @returns {string}
   */
  #extractNTokenSc(data) {
    return `var b=a.split("")${Utils.getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join("");`;
  }
  
  /**
   * Checks if the player script is cached.
   *
   * @returns {boolean}
   */
  isCached() {
    return Fs.existsSync(this.#player_path);
  }
}

module.exports = Player;