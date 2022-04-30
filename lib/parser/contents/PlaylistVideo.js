const ResultsParser = require(".");
const NavigatableText = require("./NavigatableText");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class PlaylistVideo {
    type = 'PlaylistVideo';

    constructor(item) {
        this.index = new Text(item.index).text;
        this.is_playable = item.isPlayable;
        this.duration = new Text(item.lengthText);
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
        this.author = new NavigatableText(item.shortBylineText);
        this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
        this.title = new Text(item.title);
        this.id = item.videoId;
    }
}

module.exports = PlaylistVideo;