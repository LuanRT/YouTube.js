import type { Actions, ApiResponse } from '../index.js';

import AccountInfo from '../../parser/youtube/AccountInfo.js';
import Analytics from '../../parser/youtube/Analytics.js';
import Settings from '../../parser/youtube/Settings.js';
import TimeWatched from '../../parser/youtube/TimeWatched.js';
import CopyLink from '../../parser/classes/CopyLink.js';

import { InnertubeError, u8ToBase64 } from '../../utils/Utils.js';
import { Account, BrowseEndpoint, Channel } from '../endpoints/index.js';

import { ChannelAnalytics } from '../../../protos/generated/misc/params.js';

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
       * @deprecated This method is deprecated and will be removed in a future release.
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
       * @deprecated This method is deprecated and will be removed in a future release.
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
       * @deprecated This method is deprecated and will be removed in a future release.
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
   * @deprecated This method is deprecated and will be removed in a future release.
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
   * @deprecated This method is deprecated and will be removed in a future release.
   */
  async getAnalytics(): Promise<Analytics> {
    const advanced_settings = await this.#actions.execute(
      BrowseEndpoint.PATH, { browseId: 'SPaccount_advanced', parse: true }
    );

    const copy_link_button = advanced_settings.contents_memo?.getType(CopyLink).find((node) => node.short_url.startsWith('UC'));

    if (!copy_link_button || !copy_link_button.short_url)
      throw new InnertubeError('Channel ID not found');

    const params = encodeURIComponent(u8ToBase64(ChannelAnalytics.encode({
      params: {
        channelId: copy_link_button.short_url
      }
    }).finish()));

    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: 'FEanalytics_screen',
        params
      })
    );

    return new Analytics(response);
  }
}