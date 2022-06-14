'use strict';

const Constants = require('../utils/Constants');
const QueryString = require('querystring');

class Signature {
  constructor(url, sig_decipher_sc) {
    this.url = url;
    this.sig_decipher_sc = sig_decipher_sc;
  }
  
  decipherBeta() {
    let actions;
    
    const args = QueryString.parse(this.url);
    const signature = args.s.split('');
    
    const functions = this.#getFunctions();
    
    /**
     * Decides what function should be used to modify the 
     * the signature.
     */
    while ((actions = Constants.SIG_REGEX.ACTIONS.exec(this.sig_decipher_sc)) !== null) {
      const action = actions.groups;
      switch (action.name) {
        case functions[0]:
          this.#reverse(signature);
          break;
        case functions[1]:
          this.#splice(signature, action.param);
          break;
        case functions[2]:
          this.#swap(signature, action.param);
          break;
        default:
      }
    }
    
    return signature.join('');
  }
  
  /**
   * Deciphers signature.
   *
   * @returns {string}
   */
  decipher() {
    let actions;
    
    const args = QueryString.parse(this.url);
    const signature = args.s.split('');
    
    const functions = this.#getFunctions();

    /**
     * Decides what function should be used to modify the 
     * the signature.
     */
    while ((actions = Constants.SIG_REGEX.ACTIONS.exec(this.sig_decipher_sc)) !== null) {
      const action = actions.groups;
      switch (action.name) {
        case functions[0]:
          this.#reverse(signature);
          break;
        case functions[1]:
          this.#splice(signature, action.param);
          break;
        case functions[2]:
          this.#swap(signature, action.param);
          break;
        default:
      }
    }

    const url_components = new URL(args.url);
    
    args.sp ?
      url_components.searchParams.set(args.sp, signature.join('')) :
      url_components.searchParams.set('signature', signature.join(''));
      
    return url_components.toString();
  }
  
  /**
   * Extracts the functions used to modify the signature
   * and returns them in the correct order.
   * 
   * @returns {Array.<string>}
   */
  #getFunctions() {
    let func;
    let functions = [];
    
    while ((func = Constants.SIG_REGEX.FUNCTIONS.exec(this.sig_decipher_sc)) !== null) {
      if (func[0].includes('reverse')) {
        functions[0] = func[1];
      } else if (func[0].includes('splice')) {
        functions[1] = func[1];
      } else {
        functions[2] = func[1];
      }
    }
    
    return functions;
  }
  
  #swap(arr, index) {
    let origArrI = arr[0];
    arr[0] = arr[index % arr.length];
    arr[index % arr.length] = origArrI;
  }
  
  #splice(arr, end) {
    arr.splice(0, end);
  }
  
  #reverse(arr) {
    arr.reverse();
  }
}

module.exports = Signature;