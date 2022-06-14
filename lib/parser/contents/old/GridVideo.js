const Parser = require('..');
const Author = require('./Author');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class GridVideo {
  type = 'GridVideo';

  constructor(item) {
    this.id = item.videoId;
    this.author = item.shortBylineText && new Author(item.shortBylineText, item.ownerBadges);
    this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
    this.rich_thumbnail = item.richThumbnail && Parser.parseItem(item.richThumbnail);
    this.title = new Text(item.title, '');
    this.badges = Array.isArray(item.badges) ? Parser.parse(item.badges) : [];
    const lengthAlt = item.thumbnailOverlays.find(overlay => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
    this.duration = item.lengthText ? new Text(item.lengthText, '') : lengthAlt?.text ? new Text(lengthAlt.text) : '';
    this.published_at = new Text(item.publishedTimeText, '');
    this.views = new Text(item.viewCountText, '');
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    this.short_view_count = new Text(item.shortViewCountText, '');
  }

  get best_thumbnail() {
    return this.thumbnails[0];
  }
}

module.exports = GridVideo;