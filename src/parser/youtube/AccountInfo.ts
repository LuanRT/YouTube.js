import { Parser } from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';
import AccountSectionList from '../classes/AccountSectionList.js';

import type { ApiResponse } from '../../core/index.js';
import type { IParsedResponse } from '../types/index.js';
import type AccountItemSection from '../classes/AccountItemSection.js';

export default class AccountInfo {
  readonly #page: IParsedResponse;

  contents: AccountItemSection | null;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);

    if (!this.#page.contents)
      throw new InnertubeError('Page contents not found');

    const account_section_list = this.#page.contents.array().as(AccountSectionList)[0];

    if (!account_section_list)
      throw new InnertubeError('Account section list not found');

    this.contents = account_section_list.contents[0];
  }

  get page(): IParsedResponse {
    return this.#page;
  }
}