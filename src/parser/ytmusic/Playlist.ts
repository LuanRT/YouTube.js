import Parser, { MusicPlaylistShelfContinuation, ParsedResponse, SectionListContinuation } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';

import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf';
import SectionList from '../classes/SectionList';
import { InnertubeError } from '../../utils/Utils';
import MusicEditablePlaylistDetailHeader from '../classes/MusicEditablePlaylistDetailHeader';

class Playlist {
  #page;
  #actions;
  #continuation;

  header;
  items;

  constructor(response: AxioslikeResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    if (this.#page.continuation_contents) {
      const data = this.#page.continuation_contents?.as(MusicPlaylistShelfContinuation);
      this.items = data.contents;
      this.#continuation = data.continuation;
    } else {
      if (this.#page.header?.item().type === 'MusicEditablePlaylistDetailHeader') {
        this.header = this.#page.header?.item().as(MusicEditablePlaylistDetailHeader).header.item();
      }
      else {
        this.header = this.#page.header?.item() || null;
      }
      this.items = this.#page.contents_memo.getType(MusicPlaylistShelf)?.[0].contents;
      this.#continuation = this.#page.contents_memo.getType(MusicPlaylistShelf)?.[0].continuation || null;
    }
  }

  get page(): ParsedResponse {
    return this.#page;
  }

  get has_continuation() {
    return !!this.#continuation;
  }

  /**
   * Retrieves playlist item continuation.
   */
  async getContinuation() {
    if (this.#continuation) {
      const response = await this.#actions.browse(this.#continuation, { is_ctoken: true, client: 'YTMUSIC' });
      return new Playlist(response, this.#actions);
    }

    throw new InnertubeError('Continuation not found.');

  }

  /**
   * Retrieves related playlists
   */
  async getRelated() {
    let section_continuation = this.#page.contents_memo.get('SectionList')?.[0].as(SectionList).continuation;

    while (section_continuation) {
      const response = await this.#actions.browse(section_continuation, { is_ctoken: true, client: 'YTMUSIC' });
      const data = Parser.parseResponse(response.data);
      const section_list = data.continuation_contents?.as(SectionListContinuation);
      const sections = section_list?.contents?.as(MusicCarouselShelf);
      const related = sections?.filter((section) => section.header?.title.toString() === 'Related playlists')[0];
      if (related) {
        return related.contents || [];
      }

      section_continuation = section_list?.continuation;

    }

    return [];
  }

}

export default Playlist;