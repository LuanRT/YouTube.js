import type { ApiResponse } from '../../core/Actions';
import type { ObservedArray } from '../helpers';
import Parser from '../index';

import MicroformatData from '../classes/MicroformatData';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicDetailHeader from '../classes/MusicDetailHeader';
import MusicShelf from '../classes/MusicShelf';

import type MusicResponsiveListItem from '../classes/MusicResponsiveListItem';
import type { IBrowseResponse } from '../types';

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