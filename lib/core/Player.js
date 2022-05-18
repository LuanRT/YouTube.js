'use strict';

const Fs = require('fs');
const Axios = require('axios');
const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');

class Player {
  #player_id;
  #player_url;
  #player_path;
  
  #ntoken_decipher_sc;
  #signature_decipher_sc;
  #signature_timestamp;
  
  #cache_dir;
  
  constructor(id) {
    this.#player_id = id;
    this.#cache_dir = __dirname.slice(0, -8) + 'cache';
    this.#player_url = Constants.URLS.YT_BASE + '/s/player/' + this.#player_id + '/player_ias.vflset/en_US/base.js';
    this.#player_path = `${this.#cache_dir}/${this.#player_id}.js`;
  }

  async init() {
    if (this.isCached()) {
      const player_data = Fs.readFileSync(this.#player_path).toString();
      
      this.#signature_timestamp = this.#extractSigTimestamp(player_data);
      this.#signature_decipher_sc = this.#extractSigDecipherSc(player_data);
      this.#ntoken_decipher_sc = this.#extractNTokenSc(player_data);
    } else {
      const response = await Axios.get(this.#player_url, { headers: { 'content-type': 'text/javascript', 'user-agent': Utils.getRandomUserAgent('desktop').userAgent } }).catch((error) => error);
      if (response instanceof Error) throw new Utils.InnertubeError('Could not download js player', { player_id: this.#player_id });
      
      this.#signature_timestamp = this.#extractSigTimestamp(response.data);
      this.#signature_decipher_sc = this.#extractSigDecipherSc(response.data);
      this.#ntoken_decipher_sc = this.#extractNTokenSc(response.data);
    
      try {
        // Delete the old player
        Fs.existsSync(this.#cache_dir) &&
          Fs.rmSync(this.#cache_dir, { recursive: true });
          
        // Cache the current player
        Fs.mkdirSync(this.#cache_dir, { recursive: true });
        Fs.writeFileSync(this.#player_path, response.data);
      } finally { /* do nothing */ }
    }
    
    return this;
  }
  
  get url() {
    return this.#player_url;
  }
  
  get sts() {
    return this.#signature_timestamp;
  }
  
  get ntoken_decipher() {
    return this.#ntoken_decipher_sc;
  }
  
  get signature_decipher() {
    return this.#signature_decipher_sc;
  }
  
  #extractSigTimestamp(data) {
    return parseInt(Utils.getStringBetweenStrings(data, 'signatureTimestamp:', ','));
  }
  
  #extractSigDecipherSc(data) {
    const sig_alg_sc = Utils.getStringBetweenStrings(data, 'this.audioTracks};var', '};');
    const sig_data = Utils.getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
    return sig_alg_sc + sig_data;
  }

  #extractNTokenSc(data) {
    return `var b=a.split("")${Utils.getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join("");`;
  }
  
  isCached() {
    return Fs.existsSync(this.#player_path);
  }
}

module.exports = Player;