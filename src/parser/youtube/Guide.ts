import type { IGuideResponse } from '../types/ParsedResponse.js';
import { IRawResponse, Parser } from '../index.js';
import { ObservedArray } from '../helpers.js';
import GuideSection from '../classes/GuideSection.js';

export default class Guide {

  #page: IGuideResponse;
  contents: ObservedArray<GuideSection>;

  constructor(data: IRawResponse) {
    this.#page = Parser.parseResponse<IGuideResponse>(data);
    this.contents = this.#page.items_memo.getType(GuideSection);
  }
}