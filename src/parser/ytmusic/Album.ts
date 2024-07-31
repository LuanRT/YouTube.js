import { Parser } from '../index.js';

import MicroformatData from '../classes/MicroformatData.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicDetailHeader from '../classes/MusicDetailHeader.js';
import MusicResponsiveHeader from '../classes/MusicResponsiveHeader.js';
import MusicShelf from '../classes/MusicShelf.js';
import type MusicThumbnail from '../classes/MusicThumbnail.js';

import type { ApiResponse } from '../../core/index.js';
import { observe, type ObservedArray } from '../helpers.js';
import type { IBrowseResponse } from '../types/index.js';
import type MusicResponsiveListItem from '../classes/MusicResponsiveListItem.js';

export default class Album {
  #page: IBrowseResponse;

  header?: MusicDetailHeader | MusicResponsiveHeader;
  contents: ObservedArray<MusicResponsiveListItem>;
  sections: ObservedArray<MusicCarouselShelf>;
  background?: MusicThumbnail;
  url?: string;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    if (!this.#page.contents_memo)
      throw new Error('No contents found in the response');

    this.header = this.#page.contents_memo.getType(MusicDetailHeader, MusicResponsiveHeader)?.first();
    this.contents = this.#page.contents_memo.getType(MusicShelf)?.first().contents || observe([]);
    this.sections = this.#page.contents_memo.getType(MusicCarouselShelf) || observe([]);
    this.background = this.#page.background;
    this.url = this.#page.microformat?.as(MicroformatData).url_canonical;
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}