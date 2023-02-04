import Parser from '..';
import Element from '../classes/Element';
import type { ApiResponse } from '../../core/Actions';
import type { IBrowseResponse } from '../types';

class Analytics {
  #page: IBrowseResponse;
  sections;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
    this.sections = this.#page.contents_memo?.getType(Element).map((el) => el.model?.item()).flatMap((el) => !el ? [] : el);
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}

export default Analytics;
