'use strict';

const Parser = require('..');
const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class MusicShelf {
  type = 'MusicShelf';
  
  constructor(data) {
    this.title = new Text(data.title);
    
    this.contents = Parser.parse(data.contents);
   
    this.endpoint = data.bottomEndpoint && new NavigationEndpoint(data.bottomEndpoint) || null;
    this.continuation = data.continuations?.[0].nextContinuationData.continuation || null;
    this.bottom_text = data.bottomText && new Text(data.bottomText) || null;
  }
}

module.exports = MusicShelf;