import Parser, { ParsedResponse } from '..';
import type { ApiResponse } from '../../core/Actions';
import Element from '../classes/Element';

class Analytics {
  #page: ParsedResponse;
  sections;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);
    this.sections = this.#page.contents_memo?.getType(Element).map((el) => el.model?.item());
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Analytics;
