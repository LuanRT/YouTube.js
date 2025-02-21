import { Parser } from '../index.ts';
import { InnertubeError } from '../../utils/Utils.ts';
import AccountSectionList from '../classes/AccountSectionList.ts';

import type { ApiResponse } from '../../core/index.ts';
import type { IParsedResponse } from '../types/index.ts';
import type AccountItemSection from '../classes/AccountItemSection.ts';

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