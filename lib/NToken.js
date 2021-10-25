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
    let transformations = this.getTransformationData(this.raw_code);
    
    // Identifies the necessary transformation data and emulates them accordingly.
    transformations = transformations.map((el) => {
      if (el != null && typeof el != 'number') {
        const is_reverse_base64 = el.includes('case 65:');
        if (el.includes('function(d){for(var')) {
          el = (arr) => this.pushSplice(arr);
        } else if (el.includes('d.push(e)')) {
          el = (arr, item) => this.push(arr, item);
        } else if (el.includes('d.reverse()')) {
          el = (arr) => this.reverse(arr);
        } else if (el.includes('d.length;d.splice(e,1)')) {
          el = (arr, index) => this.spliceOnce(arr, index);
        } else if (el.includes('d[0])[0])')) {
          el = (arr, index) => this.spliceTwice(arr, index);
        } else if (el.includes('reverse().forEach')) {
          el = (arr, index) => this.spliceReverseUnshift(arr, index);
        } else if (el.includes('f=d[0];d[0]')) {
          el = (arr, index) => this.swapFirstItem(arr, index);
        } else if (el.includes('unshift(d.pop())')) {
          el = (arr, index) => this.unshiftPop(arr, index);
        } else if (el.includes('switch')) {
          el = (arr, e) => this.translateAB(arr, e, is_reverse_base64);
        } else if (el === 'b') {
          el = n_token;
        }
      }
      return el;
    });
    
    // Fills the null placeholders with a copy of the transformations array.
    let null_placeholder_positions = [...this.raw_code.matchAll(this.null_placeholder_regex)].map((item) => parseInt(item[1]));
    null_placeholder_positions.forEach((pos) => transformations[pos] = transformations);
    
    // Parses and emulates calls to functions of the transformations array.
    let transformation_calls = [...Utils.getStringBetweenStrings(this.raw_code.replace(/\n/g, ''), 'try{', '}catch').matchAll(this.transformation_calls_regex)].map((params) => ({ index: params[1], params: params[2] }));
    transformation_calls.forEach((data) => {
      const index = data.index;
      const param_index = data.params.split(',').map((param) => param.match(/c\[(.*?)\]/)[1]);
      transformations[index](transformations[param_index[0]], transformations[param_index[1]]);
    });
    
    return n_token.join('');
  }

  getTransformationData() {
    let transformation_data = `[${Utils.getStringBetweenStrings(this.raw_code, 'c=[', '];c')}]`;
    transformation_data = transformation_data
    .replace(/function\(d,e\)/g, '"function(d,e)')
    .replace(/function\(d\)/g, '"function(d)')
    .replace(/,b,/g, ',"b",')
    .replace(/,b/g, ',"b"')
    .replace(/b,/g, '"b",')
    .replace(/b]/g, '"b"]')
    .replace(/},/g, '}",')
    .replace(/""/g, '')
    .replace(/length]\)}"/g, 'length])}');

    return JSON.parse(transformation_data);
  }

  translateAB(arr, index, is_reverse_base64) {
    let characters = is_reverse_base64 && Constants.base64_alphabet.reverse || Constants.base64_alphabet.normal;
    arr.forEach(function(char, index, loc) {
      this.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(this[index]) + 64) % characters.length]);
    }, index.split(''));
  }

  unshiftPop(arr, index) {
    index = (index % arr.length + arr.length) % arr.length;
    for (; index--;) {
      arr.unshift(arr.pop());
    }
  }

  swapFirstItem(arr, index) {
    let oldValue = arr[0];
    index = (index % arr.length + arr.length) % arr.length;
    arr[0] = arr[index];
    arr[index] = oldValue;
  }

  spliceReverseUnshift(arr, index) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(-index).reverse().forEach((f) => arr.unshift(f));
  }

  spliceOnce(arr, index) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(index, 1);
  }

  spliceTwice(arr, index) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(0, 1, arr.splice(index, 1, arr[0])[0]);
  }

  pushSplice(arr) {
    for (let index = arr.length; index;)
      arr.push(arr.splice(--index, 1)[0]);
  }

  push(arr, item) {
    arr.push(item);
  }

  reverse(arr) {
    arr.reverse();
  }
}

module.exports = NToken;