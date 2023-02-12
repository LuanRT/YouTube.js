import Parser, { ParsedResponse } from '../index.js';
import type { ApiResponse } from '../../core/Actions.js';
import Element from '../classes/Element.js';

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
