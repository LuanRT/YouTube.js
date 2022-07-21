import Parser from '../index';

class HomeFeed {
  #page;
  #actions;
  #continuation;

  /**
   * @param {object} response - API response.
   * @param {import('../../core/Actions').default} actions
   */
  constructor(response, actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response.data);

    const tab = this.#page.contents.tabs.get({ title: 'Home' });
    this.#continuation = tab.content?.continuation || this.#page.continuation_contents.continuation;

    /** @type {import('../classes/MusicCarouselShelf')[]} */
    this.sections = tab.content?.contents || this.#page.continuation_contents.contents;
  }

  /**
   * Retrieves home feed continuation.
   * @returns {Promise.<HomeFeed>}
   */
  async getContinuation() {
    const response = await this.#actions.browse(this.#continuation, { is_ctoken: true, client: 'YTMUSIC' });
    return new HomeFeed(response, this.#actions);
  }

  get page() {
    return this.#page;
  }
}

export default HomeFeed;