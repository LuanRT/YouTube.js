'use strict';

const Parser = require('..');
const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class MusicShelf {
  type = 'MusicShelf';
  
  constructor(data) {
    this.title = new Text(data.title).toString();
    
    this.contents = Parser.parse(data.contents);
   
    if (data.bottomEndpoint) {
      this.endpoint = new NavigationEndpoint(data.bottomEndpoint)
    }
   
    if (this.continuation) {
      this.continuation = data.continuations?.[0].nextContinuationData.continuation
    }
      
    if (data.bottomText) {
      this.bottom_text = new Text(data.bottomText)
    }
  }
}

module.exports = MusicShelf;