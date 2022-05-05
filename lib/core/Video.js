const ResultsParser = require("../parser/contents");

class Video {
    #page;
    #session;
    constructor (session, page) {
        this.#page = ResultsParser.parseResponse(page);
        this.#session = session;
    }

    get id() {
        return this.#page.video_details.id;
    }

    get title() {
        return this.#page.video_details.title;
    }

    get description() {
        return this.#page.video_details.short_description;
    }

    get thumbnail() {
        return this.#page.video_details.thumbnail[0];
    }

    get metadata() {
        // TODO: this is in playerMicroformatRenderer
    }

    get captions() {
        // TODO: playerCaptionsTracklistRenderer
    }

    get storyboards() {
        // TODO: 
    }

    // THIS IS TEMPORARY:
    getFormatURL() {
        return this.#page.streaming_data.adaptive_formats[0].getDecipheredUrl(this.#session);
    }

    like() {

    }

    dislike() {

    }

    removeLike() {

    }

    unsubscribe() {

    }

    comment() {

    }

    getComments() {

    }

    getLivechat() {

    }

    setNotificationPreferences() {

    }

    get page() {
        return this.#page;
    }
}

module.exports = Video;
