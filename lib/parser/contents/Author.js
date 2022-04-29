const ResultsParser = require(".");
const NavigatableText = require("./NavigatableText");
const Thumbnail = require("./Thumbnail");

class Author {
    #navText;
    badges;
    constructor(item, badges, thumbs) {
        this.#navText = new NavigatableText(item);
        this.badges = Array.isArray(badges) ? ResultsParser.parse(badges) : [];
        if (thumbs) {
            this.thumbnails = Thumbnail.fromResponse(thumbs);
        }
        else {
            this.thumbnails = [];
        }
    }

    get name() {
        return this.#navText.text;
    }

    get id() {
        // XXX: maybe confirm that pageType == "WEB_PAGE_TYPE_CHANNEL"?
        return this.#navText.endpoint.browseId;
    }

    get url() {
        return this.#navText.endpoint.url;
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