import { Parser } from '../index.js';
import GuideSection from '../classes/GuideSection.js';
import GuideSubscriptionsSection from '../classes/GuideSubscriptionsSection.js';

import type { ObservedArray } from '../helpers.js';
import type { IGuideResponse } from '../types/index.js';
import type { IRawResponse } from '../index.js';

export default class Guide {
  readonly #page: IGuideResponse;
  public contents?: ObservedArray<GuideSection | GuideSubscriptionsSection>;

  constructor(data: IRawResponse) {
    this.#page = Parser.parseResponse<IGuideResponse>(data);
    if (this.#page.items)
      this.contents = this.#page.items.array().as(GuideSection, GuideSubscriptionsSection);
  }

  get page(): IGuideResponse {
    return this.#page;
  }
}