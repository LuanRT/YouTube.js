const ResultsParser = require(".");
const Thumbnail = require("./Thumbnail");

class CollageHeroImage {
    type = 'CollageHeroImage';

    constructor(item) {
        this.left = Thumbnail.fromResponse(item.leftThumbnail);
        this.top_right = Thumbnail.fromResponse(item.topRightThumbnail);
        this.bottom_right = Thumbnail.fromResponse(item.bottomRightThumbnail);
    }
}

module.exports = CollageHeroImage;