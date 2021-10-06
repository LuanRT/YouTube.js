'use strict';

const fs = require('fs');
const axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');

class Player {
  constructor(innertube_session) {
    this.session = innertube_session;
    this.player_name = Utils.getStringBetweenStrings(this.session.player_url, '/player/', '/');
    this.tmp_cache_dir = __dirname.slice(0, -3) + 'cache';
  }

  async init() {
    if (fs.existsSync(this.tmp_cache_dir + '/' + this.player_name + '.js')) {
      const player_data = fs.readFileSync(this.tmp_cache_dir + '/' + this.player_name + '.js').toString();
      this.getSigDecipherCode(player_data);
      this.getNEncoder(player_data);
    } else {
      const response = await axios.get(Constants.urls.YT_BASE_URL + this.session.player_url, { path: this.session.playerUrl, headers: { 'content-type': 'text/javascript', 'user-agent': Utils.getRandomUserAgent('desktop').userAgent } }).catch((error) => error);
      if (response instanceof Error) throw new Error('Could not get player data: ' + response.message);

      fs.mkdirSync(this.tmp_cache_dir, { recursive: true });
      fs.writeFileSync(this.tmp_cache_dir + '/' + this.player_name + '.js', response.data);

      this.getSigDecipherCode(response.data);
      this.getNEncoder(response.data);
    }
  }

  getSigDecipherCode(data) {
    const actions_algorithm_code = Utils.getStringBetweenStrings(data, 'this.audioTracks};var', '};');
    const actions_sequence_code = Utils.getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
    this.sig_decipher_sc = actions_algorithm_code + actions_sequence_code;
  }

  getNEncoder(data) {
    const raw_code = 'var b=a.split("")' + Utils.getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}') + '} return b.join("");';
    this.encodeN = Utils.createFunction('a', raw_code);
  }
}

module.exports = Player;