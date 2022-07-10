'use strict';

import Parser from '..';

class Element {
  type = 'Element';

  constructor(data) {
    const type = data.newElement.type.componentType;
    return Parser.parse(type.model);
  }
}

export default Element;