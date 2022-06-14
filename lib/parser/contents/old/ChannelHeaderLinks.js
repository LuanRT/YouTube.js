const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class HeaderLink {
    constructor(item) {
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
        this.icon = Thumbnail.fromResponse(item.icon);
        this.title = new Text(item.title);
    }
}

class ChannelHeaderLinks {
  type = 'ChannelHeaderLinks';

  constructor(item) {
    this.primary = item.primaryLinks.map(link => new HeaderLink(link));
    this.secondary = item.secondaryLinks.map(link => new HeaderLink(link));
  }
}

module.exports = ChannelHeaderLinks;