const ResultsParser = require(".");
const Playlist = require("./Playlist");
const Thumbnail = require("./Thumbnail");

class Mix extends Playlist {
    type = 'Mix';

    constructor(item) {
        super(item);
        delete this.thumbnails;
        this.thumbnail = Thumbnail.fromResponse(item.thumbnail);
    }
}

module.exports = Mix;