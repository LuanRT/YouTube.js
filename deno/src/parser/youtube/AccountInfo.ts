import { Parser } from '../index.ts';
import type { ApiResponse } from '../../core/Actions.ts';
import type { IParsedResponse } from '../types/ParsedResponse.ts';

import AccountSectionList from '../classes/AccountSectionList.ts';
import type AccountItemSection from '../classes/AccountItemSection.ts';
import type AccountChannel from '../classes/AccountChannel.ts';

import { InnertubeError } from '../../utils/Utils.ts';

class AccountInfo {
  #page: IParsedResponse;

  contents: AccountItemSection | null;
  footers: AccountChannel | null;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);

    if (!this.#page.contents)
      throw new InnertubeError('Page contents not found');

    const account_section_list = this.#page.contents.array().as(AccountSectionList).first();

    if (!account_section_list)
      throw new InnertubeError('Account section list not found');

    this.contents = account_section_list.contents;
    this.footers = account_section_list.footers;
  }

  get page(): IParsedResponse {
    return this.#page;
  }
}

export default AccountInfo;