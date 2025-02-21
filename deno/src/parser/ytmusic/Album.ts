import { Parser } from '../index.ts';

import MicroformatData from '../classes/MicroformatData.ts';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';
import MusicDetailHeader from '../classes/MusicDetailHeader.ts';
import MusicResponsiveHeader from '../classes/MusicResponsiveHeader.ts';
import MusicShelf from '../classes/MusicShelf.ts';
import type MusicThumbnail from '../classes/MusicThumbnail.ts';

import type { ApiResponse } from '../../core/index.ts';
import { observe, type ObservedArray } from '../helpers.ts';
import type { IBrowseResponse } from '../types/index.ts';
import type MusicResponsiveListItem from '../classes/MusicResponsiveListItem.ts';

export default class Album {
  readonly #page: IBrowseResponse;

  public header?: MusicDetailHeader | MusicResponsiveHeader;
  public contents: ObservedArray<MusicResponsiveListItem>;
  public sections: ObservedArray<MusicCarouselShelf>;
  public background?: MusicThumbnail;
  public url?: string;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    if (!this.#page.contents_memo)
      throw new Error('No contents found in the response');

    this.header = this.#page.contents_memo.getType(MusicDetailHeader, MusicResponsiveHeader)?.[0];
    this.contents = this.#page.contents_memo.getType(MusicShelf)?.[0].contents || observe([]);
    this.sections = this.#page.contents_memo.getType(MusicCarouselShelf) || observe([]);
    this.background = this.#page.background;
    this.url = this.#page.microformat?.as(MicroformatData).url_canonical;
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}