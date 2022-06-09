'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class MusicResponsiveListItemFlexColumn {
  type = 'musicResponsiveListItemFlexColumnRenderer';
  
  constructor(data) {
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}

module.exports = MusicResponsiveListItemFlexColumn;