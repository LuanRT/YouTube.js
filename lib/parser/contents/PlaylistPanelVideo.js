const ResultsParser = require(".");
const Author = require("./Author");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class PlaylistPanelVideo {
    type = 'PlaylistPanelVideo';

    constructor(item) {
        this.index = new Text(item.indexText).text;
        this.selected = item.selected;
        this.duration = new Text(item.lengthText);
        this.author = new Author(item.longBylineText);
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
        this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
        this.title = new Text(item.title);
        this.id = item.videoId;
    }
}

module.exports = PlaylistPanelVideo;