import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray } from '../helpers.js';
import Parser from '../index.js';

import MicroformatData from '../classes/MicroformatData.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicDetailHeader from '../classes/MusicDetailHeader.js';
import MusicShelf from '../classes/MusicShelf.js';

import type MusicResponsiveListItem from '../classes/MusicResponsiveListItem.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';

class Album {
  #page: IBrowseResponse;

  header?: MusicDetailHeader;
  contents: ObservedArray<MusicResponsiveListItem>;
  sections: ObservedArray<MusicCarouselShelf>;

  url: string | null;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    this.header = this.#page.header?.item().as(MusicDetailHeader);
    this.url = this.#page.microformat?.as(MicroformatData).url_canonical || null;

    if (!this.#page.contents_memo)
      throw new Error('No contents found in the response');

    this.contents = this.#page.contents_memo.getType(MusicShelf)?.first().contents;
    this.sections = this.#page.contents_memo.getType(MusicCarouselShelf) || [];
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}

export default Album;