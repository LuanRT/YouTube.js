const ResultsParser = require(".");
const Author = require("./Author");

class VideoOwner {
    type = 'VideoOwner';

    constructor(item) {
        /*
        this.author = new Author({
            ...item.title,
            navigationEndpoint: item.navigationEndpoint
        }, item.badges, item.thumbnail); */
    }
}

module.exports = VideoOwner;