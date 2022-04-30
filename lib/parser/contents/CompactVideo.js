const ResultsParser = require(".");
const Author = require("./Author");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class CompactVideo {
    type = 'CompactVideo';

    constructor(item) {
        this.id = item.videoId;
        this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
        this.rich_thumbnail = item.richThumbnail && ResultsParser.parseItem(item.richThumbnail);
        this.title = new Text(item.title);
        this.author = new Author(item.longBylineText, item.ownerBadges, item.channelThumbnail);
        this.published_at = new Text(item.publishedTimeText);
        this.views = new Text(item.viewCountText);
        this.duration = new Text(item.lengthText);
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    }
}

module.exports = CompactVideo;