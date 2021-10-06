'use strict';

const QueryString = require('querystring');

class SigDecipher {
  constructor(url, cver, func_code, encode_n) {
    this.url = url;
    this.cver = cver;
    this.func_code = func_code;
    this.encode_n = encode_n;
    this.func_regex = /(.{2}):function\(.*?\){(.*?)}/g;
    this.actions_regex = /;.{2}\.(.{2})\(.*?,(.*?)\)/g;
  }

  decipher() {
    const args = QueryString.parse(this.url);
    const functions = this.getFunctions();

    function splice(arr, end) {
      arr.splice(0, end);
    }

    function swap(arr, position) {
      let origArrI = arr[0];
      arr[0] = arr[position % arr.length];
      arr[position % arr.length] = origArrI;
    }

    function reverse(arr) {
      arr.reverse();
    }

    let actions;
    let signature = args.s.split('');

    while ((actions = this.actions_regex.exec(this.func_code)) !== null) {
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
    args.sp !== undefined ? url_components.searchParams.set(args.sp, signature.join('')) : url_components.searchParams.set('signature', signature.join(''));
    url_components.searchParams.set('cver', this.cver);
    url_components.searchParams.set('ratebypass', 'yes');
    url_components.searchParams.set('n', this.encode_n(url_components.searchParams.get('n')));
    return url_components.toString();
  }

  getFunctions() {
    let func;
    let func_name = [];

    while ((func = this.func_regex.exec(this.func_code)) !== null) {
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