'use strict';

const Parser = require('..');
const Text = require('./Text');

class CardCollection {
  type = 'CardCollection';
  
  constructor(data) {
    this.cards = Parser.parse(data.cards);
    this.header = new Text(data.headerText);
    this.allow_teaser_dismiss = data.allowTeaserDismiss;
  }
}

module.exports = CardCollection;