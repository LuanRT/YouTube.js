import Parser, { ParsedResponse } from '../index.js';
import type { ApiResponse } from '../../core/Actions.js';

import AccountSectionList from '../classes/AccountSectionList.js';
import AccountItemSection from '../classes/AccountItemSection.js';
import AccountChannel from '../classes/AccountChannel.js';

import { InnertubeError } from '../../utils/Utils.js';

class AccountInfo {
  #page: ParsedResponse;

  contents: AccountItemSection | null;
  footers: AccountChannel | null;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);

    const account_section_list = this.#page.contents.array().as(AccountSectionList)?.[0];

    if (!account_section_list)
      throw new InnertubeError('Account section list not found');

    this.contents = account_section_list.contents;
    this.footers = account_section_list.footers;
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default AccountInfo;