'use strict';

const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');

class NToken {
  constructor(raw_code, n) {
    this.n = n;
    this.raw_code = raw_code;
  }

  /**
   * Solves throttling challange by transforming the n token.
   * @returns {string}
   */
  transform() {
    let n_token = this.n.split('');

    try {
      let transformations = this.#getTransformationData();
      transformations = transformations.map((el) => {
        if (el != null && typeof el != 'number') {
          const is_reverse_base64 = el.includes('case 65:');
          (({ // Identifies the transformation functions
            [Constants.FUNCS.PUSH]: () => el = (arr, i) => this.#push(arr, i),
            [Constants.FUNCS.SPLICE]: () => el = (arr, i) => this.#splice(arr, i),
            [Constants.FUNCS.SWAP0_1]: () => el = (arr, i) => this.#swap0(arr, i),
            [Constants.FUNCS.SWAP0_2]: () => el = (arr, i) => this.#swap0(arr, i),
            [Constants.FUNCS.ROTATE_1]: () => el = (arr, i) => this.#rotate(arr, i),
            [Constants.FUNCS.ROTATE_2]: () => el = (arr, i) => this.#rotate(arr, i),
            [Constants.FUNCS.REVERSE_1]: () => el = (arr) => this.#reverse(arr),
            [Constants.FUNCS.REVERSE_2]: () => el = (arr) => this.#reverse(arr),
            [Constants.FUNCS.BASE64_DIA]: () => el = () => this.#getBase64Dia(is_reverse_base64),
            [Constants.FUNCS.TRANSLATE_1]: () => el = (arr, token) => this.#translate1(arr, token, is_reverse_base64),
            [Constants.FUNCS.TRANSLATE_2]: () => el = (arr, token, base64_dic) => this.#translate2(arr, token, base64_dic)
          })[this.#getFunc(el)] || (() => el === 'b' && (el = n_token)))();
        }
        return el;
      });

      // Fills all placeholders with the transformations array
      const placeholder_indexes = [...this.raw_code.matchAll(Constants.NTOKEN_REGEX.PLACEHOLDERS)].map((item) => parseInt(item[1]));
      placeholder_indexes.forEach((i) => transformations[i] = transformations);

      // Parses and emulates calls to the functions of the transformations array
      const function_calls = [...Utils.getStringBetweenStrings(this.raw_code.replace(/\n/g, ''), 'try{', '}catch')
        .matchAll(Constants.NTOKEN_REGEX.CALLS)].map((params) => ({ index: params[1], params: params[2] }));

      function_calls.forEach((data) => {
        const param_index = data.params.split(',').map((param) => param.match(/c\[(.*?)\]/)[1]);
        const base64_dia = (param_index[2] && transformations[param_index[2]]());
        transformations[data.index](transformations[param_index[0]], transformations[param_index[1]], base64_dia);
      });
    } catch (err) {
      console.error(new Utils.ParsingError('Could not transform n-token, download may be throttled.', {
        original_token: this.n, 
        stack: err.stack
      }));
      return this.n;
    }
    return n_token.join('');
  }

  #getFunc(el) {
    return el.match(Constants.NTOKEN_REGEX.FUNCTIONS);
  }

  /**
   * Takes the n-transform data, refines it, and then returns a readable json array.
   * @returns {Array}
   */
  #getTransformationData() {
    const data = `[${Utils.getStringBetweenStrings(this.raw_code.replace(/\n/g, ''), 'c=[', '];c')}]`;
    return JSON.parse(Utils.refineNTokenData(data));
  }

  /**
   * Gets a base64 alphabet and uses it as a lookup table to modify n.
   * @returns
   */
  #translate1(arr, token, is_reverse_base64) {
    const characters = is_reverse_base64 && Constants.BASE64_DIALECT.REVERSE || Constants.BASE64_DIALECT.NORMAL;
    arr.forEach(function(char, index, loc) {
      this.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(this[index]) + 64) % characters.length]);
    }, token.split(''));
  }

  #translate2(arr, token, characters) {
    let chars_length = characters.length;
    arr.forEach(function(char, index, loc) {
      this.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(this[index]) + index + chars_length--) % characters.length]);
    }, token.split(''));
  }

  /**
   * Returns the requested base64 dialect, currently this is only used by 'translate2'.
   * @returns {string[]}
   */
  #getBase64Dia(is_reverse_base64) {
    const characters = is_reverse_base64 && Constants.BASE64_DIALECT.REVERSE || Constants.BASE64_DIALECT.NORMAL;
    return characters;
  }

  /**
   * Swaps the first element with the one at the given index.
   * @returns
   */
  #swap0(arr, index) {
    const old_elem = arr[0];
    index = (index % arr.length + arr.length) % arr.length;
    arr[0] = arr[index];
    arr[index] = old_elem;
  }

  /**
   * Rotates elements of the array.
   * @returns
   */
  #rotate(arr, index) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(-index).reverse().forEach((el) => arr.unshift(el));
  }

  /**
   * Deletes one element at the given index.
   * @returns
   */
  #splice(arr, index) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(index, 1);
  }

  #reverse(arr) {
    arr.reverse();
  }

  #push(arr, item) {
    arr.push(item);
  }
}

module.exports = NToken;