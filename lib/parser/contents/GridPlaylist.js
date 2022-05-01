const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class GridPlaylist {
  type = 'GridPlaylist';

  constructor(item) {
    // TODO: is an author returned?
    // I know there is a ownerBadges, but no name on channel playlist tab
    // further investigation needed
    this.id = item.playlistId;
    this.videos = new Text(item.videoCountShortText);
    this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
    this.video_thumbnails = Array.isArray(item.sidebarThumbnails) ? item.sidebarThumbnails.map(thumbs => Thumbnail.fromResponse(thumbs)) : [];
    this.title = new Text(item.title);
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    this.view_playlist = new Text(item.viewPlaylistText);
  }
}

module.exports = GridPlaylist;