const ResultsParser = require(".");
const Author = require("./Author");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class Playlist {
    type = 'Playlist';

    constructor(item) {
        this.id = item.playlistId;
        this.title = new Text(item.title).text;
        this.author = item.longBylineText.simpleText ? null : new Author(item.longBylineText, item.ownerBadges);
        this.thumbnails = Array.isArray(item.thumbnails) ? item.thumbnails.map(thumbs => Thumbnail.fromResponse(thumbs)) : [];
        if (new Text(item.videoCountText).text !== 'Mix')
            this.videos = parseInt(item.videoCount);
        this.first_videos = ResultsParser.parse(item.videos);
    }
}

module.exports = Playlist;