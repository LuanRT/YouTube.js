'use strict';

const Parser = require('..');

class Element {
  type = 'Element';

  constructor(data) {
    const type = data.newElement.type.componentType;
    return Parser.parse(type.model);
  }
}

module.exports = Element;