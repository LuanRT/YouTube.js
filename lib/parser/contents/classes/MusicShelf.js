'use strict';

const Parser = require('..');
const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class MusicShelf {
  type = 'musicShelfRenderer';
  
  constructor(data) {
    this.title = new Text(data.title);
    
    this.contents = Parser.parse(data.contents, { 
      is_single_shelf: (!data.bottomEndpoint && this.title.toString() !== 'Top result'),
      shelf_title: this.title 
    });
   
    this.endpoint = data.bottomEndpoint && new NavigationEndpoint(data.bottomEndpoint) || null;
    this.continuation = data.continuations?.[0].nextContinuationData.continuation || null;
    this.bottom_text = data.bottomText && new Text(data.bottomText) || null;
  }
}

module.exports = MusicShelf;