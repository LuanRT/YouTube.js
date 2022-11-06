import Parser, { MusicPlaylistShelfContinuation, ParsedResponse, SectionListContinuation } from '../index';
import Actions, { ApiResponse } from '../../core/Actions';

import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf';
import MusicEditablePlaylistDetailHeader from '../classes/MusicEditablePlaylistDetailHeader';
import MusicDetailHeader from '../classes/MusicDetailHeader';
import MusicShelf from '../classes/MusicShelf';

import SectionList from '../classes/SectionList';

import { InnertubeError } from '../../utils/Utils';

class Playlist {
  #page;
  #actions;
  #continuation;
  #last_fetched_suggestions: any;
  #suggestions_continuation: any;

  header;
  items;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response.data);

    this.#last_fetched_suggestions = null;
    this.#suggestions_continuation = null;

    if (this.#page.continuation_contents) {
      const data = this.#page.continuation_contents?.as(MusicPlaylistShelfContinuation);
      this.items = data.contents;
      this.#continuation = data.continuation;
    } else {
      if (this.#page.header?.item().type === 'MusicEditablePlaylistDetailHeader') {
        this.header = this.#page.header?.item().as(MusicEditablePlaylistDetailHeader).header.item().as(MusicDetailHeader);
      } else {
        this.header = this.#page.header?.item().as(MusicDetailHeader) || null;
      }
      this.items = this.#page.contents_memo.getType(MusicPlaylistShelf)?.[0].contents;
      this.#continuation = this.#page.contents_memo.getType(MusicPlaylistShelf)?.[0].continuation || null;
    }
  }

  /**
   * Retrieves playlist items continuation.
   */
  async getContinuation() {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      continuation: this.#continuation
    });

    return new Playlist(response, this.#actions);
  }

  /**
   * Retrieves related playlists
   */
  async getRelated() {
    let section_continuation = this.#page.contents_memo.get('SectionList')?.[0].as(SectionList).continuation;

    while (section_continuation) {
      const data = await this.#actions.execute('/browse', {
        client: 'YTMUSIC',
        continuation: section_continuation,
        parse: true
      });

      const section_list = data.continuation_contents?.as(SectionListContinuation);
      const sections = section_list?.contents?.as(MusicCarouselShelf, MusicShelf);

      const related = sections?.filter(
        (section) =>
          section.is(MusicCarouselShelf) ? section.header?.title.toString() === 'Related playlists' :
            section.title.toString() === 'Related playlists'
      )[0];

      if (related)
        return related.contents || [];

      section_continuation = section_list?.continuation;
    }

    return [];
  }

  async getSuggestions(refresh = true) {
    const require_fetch = refresh || !this.#last_fetched_suggestions;
    const fetch_promise = require_fetch ? this.#fetchSuggestions() : Promise.resolve(null);
    const fetch_result = await fetch_promise;

    if (fetch_result) {
      this.#last_fetched_suggestions = fetch_result.items;
      this.#suggestions_continuation = fetch_result.continuation;
    }

    return fetch_result?.items || this.#last_fetched_suggestions;
  }

  async #fetchSuggestions() {
    const continuation = this.#suggestions_continuation || this.#page.contents_memo.get('SectionList')?.[0].as(SectionList).continuation;

    if (continuation) {
      const page = await this.#actions.execute('/browse', {
        client: 'YTMUSIC',
        continuation: continuation,
        parse: true
      });

      const section_list = page.continuation_contents?.as(SectionListContinuation);
      const sections = section_list?.contents?.as(MusicCarouselShelf, MusicShelf);

      const suggestions = sections?.filter(
        (section) => section.is(MusicShelf) && section.title.toString() === 'Suggestions'
      )[0] as MusicShelf | undefined;

      return {
        items: suggestions?.contents || [],
        continuation: suggestions?.continuation || null
      };
    }

    return {
      items: [],
      continuation: null
    };
  }

  get page(): ParsedResponse {
    return this.#page;
  }

  get has_continuation() {
    return !!this.#continuation;
  }
}

export default Playlist;