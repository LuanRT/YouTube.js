import type Actions from '../../core/Actions';
import type { ApiResponse } from '../../core/Actions';
import type { ObservedArray } from '../helpers';
import Parser, { ParsedResponse } from '../index';

import MicroformatData from '../classes/MicroformatData';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicDetailHeader from '../classes/MusicDetailHeader';
import MusicShelf from '../classes/MusicShelf';

import type MusicResponsiveListItem from '../classes/MusicResponsiveListItem';

class Album {
  #page: ParsedResponse;
  #actions: Actions;

  header?: MusicDetailHeader | null;
  contents: ObservedArray<MusicResponsiveListItem>;
  sections: ObservedArray<MusicCarouselShelf>;

  url: string | null;

  constructor(response: ApiResponse, actions: Actions) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    this.header = this.#page.header?.item().as(MusicDetailHeader);
    this.url = this.#page.microformat?.as(MicroformatData).url_canonical || null;

    this.contents = this.#page.contents_memo.getType(MusicShelf)?.[0].contents;
    this.sections = this.#page.contents_memo.getType(MusicCarouselShelf) || [];
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Album;