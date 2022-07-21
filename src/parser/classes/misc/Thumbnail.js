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

  constructor({ url, width, height }) {
    this.url = url;
    this.width = width;
    this.height = height;
  }

  /**
   * Get thumbnails from response object
   *
   * @param {object} data - response object
   * @returns {Thumbnail[]} sorted array of thumbnails
   */
  static fromResponse(data) {
    if (!data || !data.thumbnails)
      return;
    return data.thumbnails.map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
  }
}

export default Thumbnail;