import Parser, { ParsedResponse } from '..';
import { AxioslikeResponse } from '../../core/Actions';

import AccountSectionList from '../classes/AccountSectionList';
import AccountItemSection from '../classes/AccountItemSection';
import AccountChannel from '../classes/AccountChannel';

class AccountInfo {
  #page;

  contents: AccountItemSection | null;
  footers: AccountChannel | null;

  constructor(response: AxioslikeResponse) {
    this.#page = Parser.parseResponse(response.data);

    const account_section_list = this.#page.contents.array().as(AccountSectionList)[0];

    this.contents = account_section_list.contents;
    this.footers = account_section_list.footers;
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default AccountInfo;