import { Parser } from '../index.js';
import Element from '../classes/Element.js';
import type { ApiResponse } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';

export default class Analytics {
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