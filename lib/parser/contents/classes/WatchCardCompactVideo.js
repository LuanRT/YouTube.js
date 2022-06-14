const Parser = require('..');
const NavigatableText = require('./NavigatableText');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class WatchCardCompactVideo {
  type = 'WatchCardCompactVideo';

  constructor(data) {
    this.title = new Text(data.title);
    const [ views, publishedAt ] = new Text(data.subtitle).split('•');
    this.views = views.trim();
    this.published_at = publishedAt?.trim();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.duration = new Text(data.lengthText);
    // TODO: byline is author?
    this.byline = new NavigatableText(data.byline);
  }
}

module.exports = WatchCardCompactVideo;