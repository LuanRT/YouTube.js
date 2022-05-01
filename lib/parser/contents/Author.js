const ResultsParser = require('.');
const NavigatableText = require('./NavigatableText');
const Thumbnail = require('./Thumbnail');

class Author {
  #nav_text;
  /**
     * @type {import('./MetadataBadge')[]}
     */
  badges;
  /**
     * @type {Thumbnail[]}
     */
  thumbnails;
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
    return this.#nav_text.toString();
  }

  set name(name) {
    this.#nav_text.text = name;
  }

  get endpoint() {
    return this.#nav_text.endpoint;
  }

  get id() {
    // XXX: maybe confirm that pageType == "WEB_PAGE_TYPE_CHANNEL"?
    // TODO: this is outdated
    return this.#nav_text.endpoint.browseId;
  }

  /**
     * @type {boolean}
     */
  get is_verified() {
    return this.badges.some(badge => badge.style === 'BADGE_STYLE_TYPE_VERIFIED');
  }

  /**
     * @type {boolean}
     */
  get is_verified_artist() {
    return this.badges.some(badge => badge.style === 'BADGE_STYLE_TYPE_VERIFIED_ARTIST');
  }

  /**
     * @type {Thumbnail | undefined}
     */
  get best_thumbnail() {
    return this.thumbnails[0];
  }
}

module.exports = Author;