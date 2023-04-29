import type { IGuideResponse } from '../types/ParsedResponse.js';
import type { IRawResponse} from '../index.js';
import { Parser } from '../index.js';
import type { ObservedArray } from '../helpers.js';
import GuideSection from '../classes/GuideSection.js';
import GuideSubscriptionsSection from '../classes/GuideSubscriptionsSection.js';

export default class Guide {

  #page: IGuideResponse;
  contents: ObservedArray<GuideSection | GuideSubscriptionsSection>;

  constructor(data: IRawResponse) {
    this.#page = Parser.parseResponse<IGuideResponse>(data);
    this.contents = this.#page.items.array().as(GuideSection, GuideSubscriptionsSection);
  }

  get page(): IGuideResponse {
    return this.#page;
  }
}