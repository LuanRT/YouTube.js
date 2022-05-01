const ResultsParser = require('.');
const NavigatableText = require('./NavigatableText');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class WatchCardCompactVideo {
  type = 'WatchCardCompactVideo';

  constructor(item) {
    this.title = new Text(item.title);
    const [ views, publishedAt ] = new Text(item.subtitle).split('•');
    this.views = views.trim();
    this.published_at = publishedAt?.trim();
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    this.duration = new Text(item.lengthText);
    // TODO: byline is author?
    this.byline = new NavigatableText(item.byline);
  }
}

module.exports = WatchCardCompactVideo;