const ResultsParser = require("../parser/contents");
const Simplify = require("../parser/simplify");

class Video {
    #player;
    #page;
    #session;
    constructor (session, player, page) {
        this.#player = ResultsParser.parseResponse(player);
        this.#page = ResultsParser.parseResponse(page);
        this.#session = session;
    }

    get id() {
        return this.#player.video_details.id;
    }

    get title() {
        return this.#player.video_details.title;
    }

    get description() {
        return this.#player.video_details.short_description;
    }

    get thumbnail() {
        return this.#player.video_details.thumbnail[0];
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
        return this.#player.streaming_data.adaptive_formats[0].getDecipheredUrl(this.#session);
    }

    /**
     * Get songs used in the video.
     * @returns {{ [key: string]: import('../parser/contents/Text')[] }[]}
     */
    get music_tracks () {
        const [secondaryInfo] = Simplify.matching({
            type: Simplify.matching('VideoSecondaryInfo'),
        }).runOn(this.#page);
        if (!secondaryInfo) return [];
        /**
         * @type {import('../parser/contents/MetadataRowContainer')}
         */
        const metadata = secondaryInfo.metadata;
        if (!metadata) return [];
        const songs = [];
        let current_song = {};
        let is_music_section = false;
        for (let i = 0; i < metadata.rows.length; i++) {
            const row = metadata.rows[i];
            if (row.type === 'MetadataRowHeader') {
                if (row.text.toString().toLowerCase().startsWith('music')) {
                    is_music_section = true;
                    i++; // skip the learn more link
                }
                continue;
            }
            if (!is_music_section) continue;
            current_song[row.title.toString().toLowerCase().replace(/ /g, '_')] = row.contents;
            if (row.has_divider_line) {
                songs.push(current_song);
                current_song = {};
            }
        }
        if (is_music_section) songs.push(current_song);
        return songs;
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

    get player() {
        return this.#player;
    }
}

module.exports = Video;
