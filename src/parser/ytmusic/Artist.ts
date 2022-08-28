import Parser, { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';

import MusicShelf from '../classes/MusicShelf';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf';
import MusicImmersiveHeader from '../classes/MusicImmersiveHeader';

class Artist {
  #page;
  #actions;

  header;
  sections;

  constructor(response: AxioslikeResponse | ParsedResponse, actions: Actions) {
    this.#page = Parser.parseResponse((response as AxioslikeResponse).data);
    this.#actions = actions;

    this.header = this.page.header.item().as(MusicImmersiveHeader);

    const music_shelf = this.#page.contents_memo.get('MusicShelf') as MusicShelf[] || [];
    const music_carousel_shelf = this.#page.contents_memo.get('MusicCarouselShelf') as MusicCarouselShelf[] || [];

    this.sections = [ ...music_shelf, ...music_carousel_shelf ];
  }

  async getAllSongs(): Promise<MusicPlaylistShelf | null> {
    const music_shelves = this.sections.filter((section) => section.type === 'MusicShelf') as MusicShelf[];

    if (!music_shelves.length)
      throw new InnertubeError('Could not find any node of type MusicShelf.');

    const shelf = music_shelves.find((shelf) => shelf.title.toString() === 'Songs') as MusicShelf;

    if (!shelf)
      throw new InnertubeError('Could not find target shelf (Songs).');

    if (!shelf.endpoint)
      throw new InnertubeError('Target shelf (Songs) did not have an endpoint.');

    const page = await shelf.endpoint.call(this.#actions, 'YTMUSIC', true) as ParsedResponse;
    const contents = page.contents_memo.get('MusicPlaylistShelf')?.[0]?.as(MusicPlaylistShelf) || null;

    return contents;
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Artist;