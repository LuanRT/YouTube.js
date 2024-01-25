import { Parser } from '../index.ts';
import Element from '../classes/Element.ts';
import type { ApiResponse } from '../../core/index.ts';
import type { IBrowseResponse } from '../types/index.ts';

class Analytics {
  #page: IBrowseResponse;
  sections;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
    this.sections = this.#page.contents_memo?.getType(Element).map((el) => el.model).flatMap((el) => !el ? [] : el);
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}

export default Analytics;
