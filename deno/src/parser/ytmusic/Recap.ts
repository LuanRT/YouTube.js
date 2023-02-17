import Parser from '../index.ts';
import type Actions from '../../core/Actions.ts';
import type { ApiResponse } from '../../core/Actions.ts';

import HighlightsCarousel from '../classes/HighlightsCarousel.ts';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';
import MusicElementHeader from '../classes/MusicElementHeader.ts';
import MusicHeader from '../classes/MusicHeader.ts';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.ts';
import Playlist from './Playlist.ts';

import ItemSection from '../classes/ItemSection.ts';
import Message from '../classes/Message.ts';
import SectionList from '../classes/SectionList.ts';
import Tab from '../classes/Tab.ts';

import { InnertubeError } from '../../utils/Utils.ts';
import type { ObservedArray } from '../helpers.ts';
import type { IBrowseResponse } from '../types/ParsedResponse.ts';

class Recap {
  #page: IBrowseResponse;
  #actions: Actions;

  header?: HighlightsCarousel | MusicHeader;
  sections?: ObservedArray<ItemSection | MusicCarouselShelf | Message>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
    this.#actions = actions;

    const header = this.#page.header?.item();

    this.header = header?.is(MusicElementHeader) ?
      this.#page.header?.item().as(MusicElementHeader).element?.model?.item().as(HighlightsCarousel) :
      this.#page.header?.item().as(MusicHeader);

    const tab = this.#page.contents?.item().as(SingleColumnBrowseResults).tabs.firstOfType(Tab);

    if (!tab)
      throw new InnertubeError('Target tab not found');

    this.sections = tab.content?.as(SectionList).contents.as(ItemSection, MusicCarouselShelf, Message);
  }

  /**
   * Retrieves recap playlist.
   */
  async getPlaylist(): Promise<Playlist> {
    if (!this.header)
      throw new InnertubeError('Header not found');

    if (!this.header.is(HighlightsCarousel))
      throw new InnertubeError('Recap playlist not available, check back later.');

    const endpoint = this.header.panels[0].text_on_tap_endpoint;
    const response = await endpoint.call(this.#actions, { client: 'YTMUSIC' });

    return new Playlist(response, this.#actions);
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}

export default Recap;