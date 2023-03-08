import type { IGuideResponse } from '../types/ParsedResponse.ts';
import { IRawResponse, Parser } from '../index.ts';
import { ObservedArray } from '../helpers.ts';
import GuideSection from '../classes/GuideSection.ts';
import GuideSubscriptionsSection from '../classes/GuideSubscriptionsSection.ts';

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