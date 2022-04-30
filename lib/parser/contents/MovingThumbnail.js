const ResultsParser = require(".");
const Thumbnail = require("./Thumbnail");

class MovingThumbnail {
    type = 'MovingThumbnail';

    constructor(item) {
        this.thumbnails = item.movingThumbnailDetails && Thumbnail.fromResponse(item.movingThumbnailDetails.thumbnails);
    }
}

module.exports = MovingThumbnail;