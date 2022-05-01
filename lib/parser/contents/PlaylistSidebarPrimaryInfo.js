const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class PlaylistSidebarPrimaryInfo {
  type = 'PlaylistSidebarPrimaryInfo';

  constructor(item) {
    this.stats = item.stats.map(stat => new Text(stat));
    this.thumbnail_renderer = ResultsParser.parseItem(item.thumbnailRenderer);
    this.title = new Text(item.title);
    this.menu = item.menu && ResultsParser.parseItem(item.menu);
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    this.description = new Text(item.description);
  }
}

module.exports = PlaylistSidebarPrimaryInfo;