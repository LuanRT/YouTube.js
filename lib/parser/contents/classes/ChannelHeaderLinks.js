'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class HeaderLink {
    constructor(data) {
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.icon = Thumbnail.fromResponse(data.icon);
        this.title = new Text(data.title);
    }
}

class ChannelHeaderLinks {
  type = 'ChannelHeaderLinks';

  constructor(data) {
    this.primary = data.primaryLinks?.map((link) => new HeaderLink(link)) || [];
    this.secondary = data.secondaryLinks?.map((link) => new HeaderLink(link)) || [];
  }
}

module.exports = ChannelHeaderLinks;