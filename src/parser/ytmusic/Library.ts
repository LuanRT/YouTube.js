import Parser, { ParsedResponse } from '..';
import { AxioslikeResponse } from '../../core/Actions';

class Library {
  #page;

  constructor(response: AxioslikeResponse) {
    this.#page = Parser.parseResponse(response.data);
    // TODO: finish this
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Library;