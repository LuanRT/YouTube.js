'use strict';

const Text = require('../../Text');
const Thumbnail = require('../../Thumbnail');
const NavigationEndpoint = require('../../NavigationEndpoint');
const Parser = require('../../..');

class LiveChatTextMessage {
  type = 'LiveChatTextMessage';
  
  constructor(data) {
    this.message = new Text(data.message);
   
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data.authorName),
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
    };
    
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.timestamp = new Date(parseInt(data.timestampUsec) / 1000);
    this.id = data.id;
  }
}

module.exports = LiveChatTextMessage;