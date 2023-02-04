import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray } from '../helpers.js';
import Parser, { ParsedResponse } from '../index.js';

import MicroformatData from '../classes/MicroformatData.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicDetailHeader from '../classes/MusicDetailHeader.js';
import MusicShelf from '../classes/MusicShelf.js';

import type MusicResponsiveListItem from '../classes/MusicResponsiveListItem.js';

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