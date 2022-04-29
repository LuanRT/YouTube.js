const ResultsParser = require(".");
const NavigatableText = require("./NavigatableText");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");

class WatchCardCompactVideo {
    type = 'WatchCardCompactVideo';

    constructor(item) {
        this.title = new Text(item.title).text;
        const [ views, publishedAt ] = new Text(item.subtitle).text.split('•');
        this.views = views.trim();
        this.publishedAt = publishedAt?.trim();
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
        this.duration = new Text(item.lengthText).text;
        // TODO: byline is author?
        this.byline = new NavigatableText(item.byline);
    }
}

module.exports = WatchCardCompactVideo;