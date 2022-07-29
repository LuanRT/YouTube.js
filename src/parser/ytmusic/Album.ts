import Parser, { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';

import MusicDetailHeader from '../classes/MusicDetailHeader';
import MicroformatData from '../classes/MicroformatData';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicResponsiveListItem from '../classes/MusicResponsiveListItem';
import MusicShelf from '../classes/MusicShelf';

class Album {
  #page;
  #actions;

  header;
  contents;
  sections;

  url: string | null;

  constructor(response: AxioslikeResponse, actions: Actions) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    this.header = this.#page.header.item().as(MusicDetailHeader);
    this.url = this.#page.microformat?.as(MicroformatData).url_canonical || null;

    this.contents = this.#page.contents_memo.get('MusicShelf')?.[0].as(MusicShelf).contents.array().as(MusicResponsiveListItem);
    this.sections = this.#page.contents_memo.get('MusicCarouselShelf') as MusicCarouselShelf[] || ([] as MusicCarouselShelf[]);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Album;