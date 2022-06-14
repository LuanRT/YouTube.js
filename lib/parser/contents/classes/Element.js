'use strict';

const Parser = require('..');

class Element {
  type = 'elementRenderer';
  
  constructor(data) {
    const type = data.newElement.type.componentType;
    return Parser.parse(type.model);
  }
}

module.exports = Element; 