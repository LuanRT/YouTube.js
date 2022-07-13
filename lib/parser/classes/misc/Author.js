import Parser from "../../index.js";
import NavigatableText from "./NavigatableText.js";
import Thumbnail from "./Thumbnail.js";
import Constants from "../../../utils/Constants.js";

class Author {
    #nav_text;
    constructor(item, badges, thumbs) {
        this.#nav_text = new NavigatableText(item);
        this.id =
            this.#nav_text.runs?.[0].endpoint.browse?.id ||
                this.#nav_text.endpoint?.browse?.id || 'N/A';
        this.name = this.#nav_text.text || 'N/A';
        this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
        this.endpoint = this.#nav_text.runs?.[0].endpoint || this.#nav_text.endpoint;
        this.badges = Array.isArray(badges) ? Parser.parse(badges) : [];
        this.is_verified = this.badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') || null;
        this.is_verified_artist = this.badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') || null;
        this.url =
            this.#nav_text.runs?.[0].endpoint.browse &&
                `${Constants.URLS.YT_BASE}${this.#nav_text.runs[0].endpoint.browse?.base_url || `/u/${this.#nav_text.runs[0].endpoint.browse?.id}`}` ||
                `${Constants.URLS.YT_BASE}${this.#nav_text.endpoint?.browse?.base_url || `/u/${this.#nav_text.endpoint?.browse?.id}`}` ||
                null;
    }
    /**
     * @type {Thumbnail | undefined}
     */
    get best_thumbnail() {
        return this.thumbnails[0];
    }
}
export default Author;
