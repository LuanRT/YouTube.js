'use strict';

const Utils = require('./Utils');
const Constants = require('./Constants');

class NToken {
  constructor(raw_code) {
    this.raw_code = raw_code;
    this.null_placeholder_regex = /c\[(.*?)\]=c/g;
    this.transformation_calls_regex = /c\[(.*?)\]\((.+?)\)/g;
  }

  transform(n) {
    let n_token = n.split('');
    
    try {
      let transformations = this.getTransformationData(this.raw_code);
      transformations = transformations.map((el, i) => {
        if (el != null && typeof el != 'number') {
          const is_reverse_base64 = el.includes('case 65:');
          (({ // Identifies the transformation functions and emulates them accordingly.
            [Constants.FUNCS.PUSH]: () => el = (arr, item) => this.push(arr, item),
            [Constants.FUNCS.SPLICE]: () => el = (arr, i) => this.splice(arr, i),
            [Constants.FUNCS.SWAP0_1]: () => el = (arr, i) => this.swap0(arr, i),
            [Constants.FUNCS.SWAP0_2]: () => el = (arr, i) => this.swap0(arr, i),
            [Constants.FUNCS.ROTATE_1]: () => el = (arr, i) => this.rotate(arr, i),
            [Constants.FUNCS.ROTATE_2]: () => el = (arr, i) => this.rotate(arr, i),
            [Constants.FUNCS.REVERSE_1]: () => el = (arr) => this.reverse(arr),
            [Constants.FUNCS.REVERSE_2]: () => el = (arr) => this.reverse(arr),
            [Constants.FUNCS.TRANSLATE]: () => el = (arr, token) => this.translate(arr, token, is_reverse_base64)
          })[this.getFunc(el)] || (() => el === 'b' && (el = n_token)))();
        }
        return el;
      });
      
      // Fills the null placeholders with a copy of the transformations array.
      let null_placeholder_positions = [...this.raw_code.matchAll(this.null_placeholder_regex)].map((item) => parseInt(item[1]));
      null_placeholder_positions.forEach((pos) => transformations[pos] = transformations);

      // Parses and emulates calls to thr functions of the transformations array.
      let transformation_calls = [...Utils.getStringBetweenStrings(this.raw_code.replace(/\n/g, ''), 'try{', '}catch').matchAll(this.transformation_calls_regex)].map((params) => ({ index: params[1], params: params[2] }));
      transformation_calls.forEach((data) => {
        const param_index = data.params.split(',').map((param) => param.match(/c\[(.*?)\]/)[1]);
        transformations[data.index](transformations[param_index[0]], transformations[param_index[1]]);
      });
    } catch (err) {
      console.error(err);
      return n;
    }

    return n_token.join('');
  }
  
  getFunc(el) {
    return el.match(Constants.FUNCS_REGEX);
  }
  
  getTransformationData() {
    const data = `[${Utils.getStringBetweenStrings(this.raw_code.replace(/\n/g, ''), 'c=[', '];c')}]`;
    return JSON.parse(Constants.formatNTransformData(data));
  }

  translate(arr, token, is_reverse_base64) {
    const characters = is_reverse_base64 && Constants.BASE64_DIALECT.REVERSE || Constants.BASE64_DIALECT.NORMAL;
    arr.forEach(function(char, index, loc) {
      this.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(this[index]) + 64) % characters.length]);
    }, token.split(''));
  }
  
  swap0(arr, index) {
    const old_value = arr[0];
    index = (index % arr.length + arr.length) % arr.length;
    arr[0] = arr[index];
    arr[index] = old_value;
  }
  
  rotate(arr, index) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(-index).reverse().forEach((el) => arr.unshift(el));
  }
  
  splice(arr, index) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(index, 1);
  }
  
  reverse(arr) {
    arr.reverse();
  }
  
  push(arr, item) {
    arr.push(item);
  }
}

module.exports = NToken;