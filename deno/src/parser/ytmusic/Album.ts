import type { ApiResponse } from '../../core/Actions.ts';
import type { ObservedArray } from '../helpers.ts';
import Parser from '../index.ts';

import MicroformatData from '../classes/MicroformatData.ts';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';
import MusicDetailHeader from '../classes/MusicDetailHeader.ts';
import MusicShelf from '../classes/MusicShelf.ts';

import type MusicResponsiveListItem from '../classes/MusicResponsiveListItem.ts';
import type { IBrowseResponse } from '../types/ParsedResponse.ts';

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