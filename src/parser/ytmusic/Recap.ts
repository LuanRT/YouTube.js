import { Parser } from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';

import Playlist from './Playlist.js';
import HighlightsCarousel from '../classes/HighlightsCarousel.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicElementHeader from '../classes/MusicElementHeader.js';
import MusicHeader from '../classes/MusicHeader.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';
import ItemSection from '../classes/ItemSection.js';
import Message from '../classes/Message.js';
import SectionList from '../classes/SectionList.js';
import Tab from '../classes/Tab.js';

import type { ObservedArray } from '../helpers.js';
import type { IBrowseResponse } from '../types/index.js';
import type { ApiResponse, Actions } from '../../core/index.js';

export default class Recap {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;

  public header?: HighlightsCarousel | MusicHeader;
  public sections?: ObservedArray<ItemSection | MusicCarouselShelf | Message>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
    this.#actions = actions;

    const header = this.#page.header?.item();

    this.header = header?.is(MusicElementHeader) ?
      this.#page.header?.item().as(MusicElementHeader).element?.model?.as(HighlightsCarousel) :
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