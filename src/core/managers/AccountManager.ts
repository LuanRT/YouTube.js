import type { Actions } from '../index.js';

import AccountInfo from '../../parser/youtube/AccountInfo.js';
import Settings from '../../parser/youtube/Settings.js';
import NavigationEndpoint from '../../parser/classes/NavigationEndpoint.js';

import { InnertubeError } from '../../utils/Utils.js';

export default class AccountManager {
  readonly #actions: Actions;

  constructor(actions: Actions) {
    this.#actions = actions;
  }

  /**
   * Retrieves channel info.
   */
  async getInfo(): Promise<AccountInfo> {
    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');
    const get_accounts_list_endpoint = new NavigationEndpoint({ getAccountsListInnertubeEndpoint: {} });
    const response = await get_accounts_list_endpoint.call(this.#actions, { client: 'TV' });
    return new AccountInfo(response);
  }

  /**
   * Gets YouTube settings.
   */
  async getSettings(): Promise<Settings> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'SPaccount_overview' } });
    const response = await browse_endpoint.call(this.#actions);
    return new Settings(this.#actions, response);
  }
}