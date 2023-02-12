import Parser, { ParsedResponse } from '../index.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import { InnertubeError } from '../../utils/Utils.js';

import MusicShelf from '../classes/MusicShelf.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf.js';
import MusicImmersiveHeader from '../classes/MusicImmersiveHeader.js';
import MusicVisualHeader from '../classes/MusicVisualHeader.js';
import MusicHeader from '../classes/MusicHeader.js';

class Artist {
  #page: ParsedResponse;
  #actions: Actions;

  header?: MusicImmersiveHeader | MusicVisualHeader | MusicHeader;
  sections: (MusicCarouselShelf | MusicShelf)[];

  constructor(response: ApiResponse | ParsedResponse, actions: Actions) {
    this.#page = Parser.parseResponse((response as ApiResponse).data);
    this.#actions = actions;

    this.header = this.page.header?.item().as(MusicImmersiveHeader, MusicVisualHeader, MusicHeader);

    const music_shelf = this.#page.contents_memo.getType(MusicShelf) || [];
    const music_carousel_shelf = this.#page.contents_memo.getType(MusicCarouselShelf) || [];

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

    const page = await shelf.endpoint.call(this.#actions, { client: 'YTMUSIC', parse: true });
    const contents = page.contents_memo.getType(MusicPlaylistShelf)?.[0] || null;

    return contents;
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Artist;