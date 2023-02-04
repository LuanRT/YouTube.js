import Parser from '..';
import type { ApiResponse } from '../../core/Actions';
import type { IParsedResponse } from '../types';

import AccountSectionList from '../classes/AccountSectionList';
import AccountItemSection from '../classes/AccountItemSection';
import AccountChannel from '../classes/AccountChannel';

import { InnertubeError } from '../../utils/Utils';

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