
const Parser = require('..');

module.exports = (name, field = 'contents') => {
  return class List {
    type = name;
    is_list = true;
    constructor(items) {
      this.contents = Parser.parse(items[field]);
    }
  }
}