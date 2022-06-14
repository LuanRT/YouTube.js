const Parser = require('..');

module.exports = (name) => {
  return class GenericContainer {
    type = name;
    
    constructor(item) {
      this.content = Parser.parseItem(item.content);
    }
  }
};