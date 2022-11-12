import Proto from '../proto/index';
import Actions from './Actions';

import Analytics from '../parser/youtube/Analytics';
import TimeWatched from '../parser/youtube/TimeWatched';
import AccountInfo from '../parser/youtube/AccountInfo';
import Settings from '../parser/youtube/Settings';
import { InnertubeError } from '../utils/Utils';

class AccountManager {
  #actions;
  channel;

  constructor(actions: Actions) {
    this.#actions = actions;

    this.channel = {
      /**
       * Edits channel name.
       * @param new_name - The new channel name.
       */
      editName: (new_name: string) => {
        if (!this.#actions.session.logged_in)
          throw new InnertubeError('You must be signed in to perform this operation.');

        return this.#actions.execute('/channel/edit_name', {
          givenName: new_name,
          client: 'ANDROID'
        });
      },
      /**
       * Edits channel description.
       * @param new_description - The new description.
       */
      editDescription: (new_description: string) => {
        if (!this.#actions.session.logged_in)
          throw new InnertubeError('You must be signed in to perform this operation.');

        return this.#actions.execute('/channel/edit_description', {
          givenDescription: new_description,
          client: 'ANDROID'
        });
      },
      /**
       * Retrieves basic channel analytics.
       */
      getBasicAnalytics: () => this.getAnalytics()
    };
  }

  /**
   * Retrieves channel info.
   */
  async getInfo() {
    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const response = await this.#actions.execute('/account/accounts_list', { client: 'ANDROID' });
    return new AccountInfo(response);
  }

  /**
   * Retrieves time watched statistics.
   */
  async getTimeWatched() {
    const response = await this.#actions.execute('/browse', {
      browseId: 'SPtime_watched',
      client: 'ANDROID'
    });

    return new TimeWatched(response);
  }

  /**
   * Opens YouTube settings.
   */
  async getSettings() {
    const response = await this.#actions.execute('/browse', {
      browseId: 'SPaccount_overview'
    });

    return new Settings(this.#actions, response);
  }

  /**
   * Retrieves basic channel analytics.
   */
  async getAnalytics() {
    const info = await this.getInfo();

    const params = Proto.encodeChannelAnalyticsParams(info.footers?.endpoint.payload.browseId);

    const response = await this.#actions.execute('/browse', {
      browseId: 'FEanalytics_screen',
      client: 'ANDROID',
      params
    });

    return new Analytics(response);
  }
}

export default AccountManager;