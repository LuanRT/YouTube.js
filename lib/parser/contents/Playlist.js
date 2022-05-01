const ResultsParser = require('.');
const Author = require('./Author');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class Playlist {
  type = 'Playlist';

  constructor(item) {
    this.id = item.playlistId;
    this.title = new Text(item.title);
    this.author = item.longBylineText.simpleText ? null : new Author(item.longBylineText, item.ownerBadges);
    this.thumbnails = Array.isArray(item.thumbnails) ? item.thumbnails.map(thumbs => Thumbnail.fromResponse(thumbs)) : [];
    if (new Text(item.videoCountText) !== 'Mix')
      this.videos = parseInt(item.videoCount);
    this.first_videos = ResultsParser.parse(item.videos);
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    this.view_playlist = new Text(item.viewPlaylistText);
  }
}

module.exports = Playlist;