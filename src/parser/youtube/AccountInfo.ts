import Parser, { ParsedResponse } from '..';
import type { ApiResponse } from '../../core/Actions';

import AccountSectionList from '../classes/AccountSectionList';
import AccountItemSection from '../classes/AccountItemSection';
import AccountChannel from '../classes/AccountChannel';

import { InnertubeError } from '../../utils/Utils';

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