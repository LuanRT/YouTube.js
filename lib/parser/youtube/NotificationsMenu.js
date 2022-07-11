'use strict';

const Parser = require('..');
const { InnertubeError } = require('../../utils/Utils');

class NotificationsMenu {
  #page;
  #actions;
  #continuation;

  /**
   * @param {import('../../core/Actions')} actions
   * @param {object} response - API response.
   */
  constructor(actions, response) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response);

    /** @type {import('../classes/menus/SimpleMenuHeader')} */
    this.header = this.#page.actions_memo.get('SimpleMenuHeader')?.[0] || null;

    /** @type {import('../classes/Notification')} */
    this.contents = this.#page.actions_memo.get('Notification');
  }

  /**
   * Retrieves next batch of notifications.
   * @returns {Promise.<NotificationsMenu>}
   */
  async getContinuation() {
    const continuation = this.#page.actions_memo.get('ContinuationItem')?.[0];

    if (!continuation)
      throw new InnertubeError('Continuation not found');

    const response = await continuation.endpoint.callTest(this.#actions, { parse: false });

    return new NotificationsMenu(this.#actions, response.data);
  }

  get page() {
    return this.#page;
  }
}

module.exports = NotificationsMenu;