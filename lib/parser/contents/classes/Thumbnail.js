class Thumbnail {
  /**
   * @type {string}
   */
  url;
  /**
   * @type {number}
   */
  width;
  /**
   * @type {number}
   */
  height;
  constructor ({ url, width, height }) {
    this.url = url;
    this.width = width;
    this.height = height;
  }

  /**
   * Get thumbnails from response object
   *
   * @param {*} response response object
   * @returns {Thumbnail[]} sorted array of thumbnails
   */
  static fromResponse({ thumbnails }) {
    if (!thumbnails) {
      return;
    }
    return thumbnails.map(x => new Thumbnail(x)).sort((a, b) => b.width - a.width);
  }
}

module.exports = Thumbnail;