const ResultsParser = require(".");
const Thumbnail = require("./Thumbnail");

class CollageHeroImage {
    type = 'CollageHeroImage';

    constructor(item) {
        this.left = Thumbnail.fromResponse(item.leftThumbnail);
        this.topRight = Thumbnail.fromResponse(item.topRightThumbnail);
        this.bottomRight = Thumbnail.fromResponse(item.bottomRightThumbnail);
    }
}

module.exports = CollageHeroImage;