'use strict';

const { InnertubeError } = require('../utils/Utils');
const Feed = require('./Feed');

class FilterableFeed extends Feed {
  /**
   * @type {import('../parser/contents/ChipCloudChip')[]}
   */
  #chips;

  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
  }

  /**
   * Get filters for the feed
   *
   * @returns {import('../parser/contents/ChipCloudChip')[]}
   */
  get filter_chips() {
    if (this.#chips) return this.#chips || [];

    if (this.memo.get('FeedFilterChipBar')?.length > 1)
      throw new InnertubeError('There are too many feed filter chipbars, you\'ll need to find the correct one yourself in this.page');
    if (this.memo.get('FeedFilterChipBar')?.length === 0)
      throw new InnertubeError('There are no feed filter chipbars');

    this.#chips = this.memo.get('ChipCloudChip') || [];

    return this.#chips || [];
  }

  get filters() {
    return this.filter_chips.map((chip) => chip.text.toString()) || [];
  }

  /**
   * Applies given filter and returns a new {@link Feed} object.
   *
   * @param {string | import('../parser/contents/classes/ChipCloudChip')} filter
   * @returns {Promise.<Feed>}
   */
  async getFilteredFeed(filter) {
    let target_filter;

    if (typeof filter === 'string') {
      if (!this.filters.includes(filter))
        throw new InnertubeError('Filter not found', {
          available_filters: this.filters
        });
      target_filter = this.filter_chips.find((chip) => chip.text.toString() === filter);
    } else if (filter.type === 'ChipCloudChip') {
      target_filter = filter;
    } else {
      throw new InnertubeError('Invalid filter');
    }

    if (target_filter.is_selected) return this;

    const response = await target_filter.endpoint.call(this.actions);

    return new Feed(this.actions, response, true);
  }
}

module.exports = FilterableFeed;