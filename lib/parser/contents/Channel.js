const ResultsParser = require(".");
const Author = require("./Author");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");

class Channel {
    type = 'Channel';

    constructor(item) {
        this.id = item.channelId;
        this.author = new Author({
            ...item.title,
            navigationEndpoint: item.navigationEndpoint
        }, item.ownerBadges, item.thumbnail);
        this.subscribers = new Text(item.subscriberCountText).text;
        this.description_snippet = new Text(item.descriptionSnippet).text;
        this.videos = new Text(item.videoCountText).text;
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    }
}

module.exports = Channel;