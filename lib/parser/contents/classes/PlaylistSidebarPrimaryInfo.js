const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class PlaylistSidebarPrimaryInfo {
  type = 'PlaylistSidebarPrimaryInfo';

  constructor(data) {
    this.stats = data.stats.map(stat => new Text(stat));
    this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
    this.title = new Text(data.title);
    this.menu = data.menu && Parser.parse(data.menu);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description = new Text(data.description);
  }
}

module.exports = PlaylistSidebarPrimaryInfo;