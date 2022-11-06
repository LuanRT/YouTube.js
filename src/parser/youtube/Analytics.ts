import Parser, { ParsedResponse } from '..';
import { ApiResponse } from '../../core/Actions';
import Element from '../classes/Element';

class Analytics {
  #page;
  sections;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);
    this.sections = this.#page.contents_memo?.get('Element')
      ?.map((el) => el.as(Element).model?.item());
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Analytics;
