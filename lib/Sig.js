'use strict';

const QueryString = require('querystring');

class SigDecipher {
  constructor(url, player) {
    this.url = url;
    this.player = player;
    this.func_regex = /(.{2}):function\(.*?\){(.*?)}/g;
    this.actions_regex = /;.{2}\.(.{2})\(.*?,(.*?)\)/g;
  }

  /**
  * Deciphers signature.
  */
  decipher() {
    const args = QueryString.parse(this.url);
    const functions = this.#getFunctions();

    function splice(arr, end) {
      arr.splice(0, end);
    }

    function swap(arr, index) {
      let origArrI = arr[0];
      arr[0] = arr[index % arr.length];
      arr[index % arr.length] = origArrI;
    }

    function reverse(arr) {
      arr.reverse();
    }

    let actions;
    let signature = args.s.split('');

    while ((actions = this.actions_regex.exec(this.player.sig_decipher_sc)) !== null) {
      switch (actions[1]) {
        case functions[0]:
          reverse(signature, actions[2]);
          break;
        case functions[1]:
          splice(signature, actions[2]);
          break;
        case functions[2]:
          swap(signature, actions[2]);
          break;
        default:
      }
    }

    const url_components = new URL(args.url);
    args.sp ? url_components.searchParams.set(args.sp, signature.join('')) : url_components.searchParams.set('signature', signature.join(''));
    return url_components.toString();
  }

  #getFunctions() {
    let func;
    let func_name = [];

    while ((func = this.func_regex.exec(this.player.sig_decipher_sc)) !== null) {
      if (func[0].includes('reverse()')) {
        func_name[0] = func[1];
      } else if (func[0].includes('splice')) {
        func_name[1] = func[1];
      } else {
        func_name[2] = func[1];
      }
    }

    return func_name;
  }
}

module.exports = SigDecipher;