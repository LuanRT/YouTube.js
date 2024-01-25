import AccountInfo from '../../parser/youtube/AccountInfo.js';
import Analytics from '../../parser/youtube/Analytics.js';
import Settings from '../../parser/youtube/Settings.js';
import TimeWatched from '../../parser/youtube/TimeWatched.js';

import * as Proto from '../../proto/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import { Account, BrowseEndpoint, Channel } from '../endpoints/index.js';

import type Actions from '../Actions.js';
import type { ApiResponse } from '../Actions.js';

export default class AccountManager {
  #actions: Actions;

  channel: {
    editName: (new_name: string) => Promise<ApiResponse>;
    editDescription: (new_description: string) => Promise<ApiResponse>;
    getBasicAnalytics: () => Promise<Analytics>;
  };

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

        return this.#actions.execute(
          Channel.EditNameEndpoint.PATH,
          Channel.EditNameEndpoint.build({
            given_name: new_name
          })
        );
      },
      /**
       * Edits channel description.
       * @param new_description - The new description.
       */
      editDescription: (new_description: string) => {
        if (!this.#actions.session.logged_in)
          throw new InnertubeError('You must be signed in to perform this operation.');

        return this.#actions.execute(
          Channel.EditDescriptionEndpoint.PATH,
          Channel.EditDescriptionEndpoint.build({
            given_description: new_description
          })
        );
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
  async getInfo(): Promise<AccountInfo> {
    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const response = await this.#actions.execute(
      Account.AccountListEndpoint.PATH,
      Account.AccountListEndpoint.build()
    );

    return new AccountInfo(response);
  }

  /**
   * Retrieves time watched statistics.
   */
  async getTimeWatched(): Promise<TimeWatched> {
    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: 'SPtime_watched',
        client: 'ANDROID'
      })
    );

    return new TimeWatched(response);
  }

  /**
   * Opens YouTube settings.
   */
  async getSettings(): Promise<Settings> {
    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: 'SPaccount_overview'
      })
    );
    return new Settings(this.#actions, response);
  }

  /**
   * Retrieves basic channel analytics.
   */
  async getAnalytics(): Promise<Analytics> {
    const info = await this.getInfo();

    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: 'FEanalytics_screen',
        params: Proto.encodeChannelAnalyticsParams(info.footers?.endpoint.payload.browseId),
        client: 'ANDROID'
      })
    );

    return new Analytics(response);
  }
}