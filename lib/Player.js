'use strict';

const Fs = require('fs');
const Axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');

class Player {
  constructor(session) {
    this.session = session;
    this.player_name = Utils.getStringBetweenStrings(this.session.player_url, '/player/', '/');
    this.tmp_cache_dir = __dirname.slice(0, -3) + 'cache';
  }

  async init() {
    if (Fs.existsSync(`${this.tmp_cache_dir}/${this.player_name}.js`)) {
      const player_data = Fs.readFileSync(`${this.tmp_cache_dir}/${this.player_name}.js`).toString();
      this.sig_decipher_sc = this.#getSigDecipherCode(player_data);
      this.ntoken_sc = this.#getNEncoder(player_data);
    } else {
      const response = await Axios.get(`${Constants.URLS.YT_BASE}${this.session.player_url}`, { path: this.session.playerUrl, headers: { 'content-type': 'text/javascript', 'user-agent': Utils.getRandomUserAgent('desktop').userAgent } }).catch((error) => error);
      if (response instanceof Error) throw new Error('Could not download player script: ' + response.message);

      try {
        // Deletes old players
        Fs.existsSync(this.tmp_cache_dir) && Fs.rmSync(this.tmp_cache_dir, { recursive: true });

        // Caches the current player so we don't have to download it all the time.
        Fs.mkdirSync(this.tmp_cache_dir, { recursive: true });
        Fs.writeFileSync(`${this.tmp_cache_dir}/${this.player_name}.js`, response.data);
      } catch (err) { }

      this.sig_decipher_sc = this.#getSigDecipherCode(response.data);
      this.ntoken_sc = this.#getNEncoder(response.data);
    }
  }

  #getSigDecipherCode(data) {
    const sig_alg_sc = Utils.getStringBetweenStrings(data, 'this.audioTracks};var', '};');
    const sig_data = Utils.getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
    return sig_alg_sc + sig_data;
  }

  #getNEncoder(data) {
    return `var b=a.split("")${Utils.getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join("");`;
  }
}

module.exports = Player;