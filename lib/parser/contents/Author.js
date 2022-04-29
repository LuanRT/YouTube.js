const ResultsParser = require(".");
const NavigatableText = require("./NavigatableText");
const Thumbnail = require("./Thumbnail");

class Author {
    #navText;
    badges;
    constructor(item, badges, thumbs) {
        this.#nav_text = new NavigatableText(item);
        this.badges = Array.isArray(badges) ? ResultsParser.parse(badges) : [];
        if (thumbs) {
            this.thumbnails = Thumbnail.fromResponse(thumbs);
        }
        else {
            this.thumbnails = [];
        }
    }

    get name() {
        return this.#nav_text.text;
    }

    set name(name) {
        this.#nav_text.text = name;
    }

    get id() {
        // XXX: maybe confirm that pageType == "WEB_PAGE_TYPE_CHANNEL"?
        return this.#nav_text.endpoint.browseId;
    }

    get url() {
        return this.#nav_text.endpoint.url;
    }

    get isVerified() {
        return this.badges.some(badge => badge.style === 'BADGE_STYLE_TYPE_VERIFIED');
    }

    get isVerifiedArtist() {
        return this.badges.some(badge => badge.style === 'BADGE_STYLE_TYPE_VERIFIED_ARTIST');
    }

    get bestThumbnail() {
        return this.thumbnails[0];
    }
}

module.exports = Author;