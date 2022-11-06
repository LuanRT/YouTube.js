import Parser, { ParsedResponse } from '../index';
import Actions, { ApiResponse } from '../../core/Actions';

import Playlist from './Playlist';
import MusicHeader from '../classes/MusicHeader';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicElementHeader from '../classes/MusicElementHeader';
import HighlightsCarousel from '../classes/HighlightsCarousel';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';

import Tab from '../classes/Tab';
import ItemSection from '../classes/ItemSection';
import SectionList from '../classes/SectionList';
import Message from '../classes/Message';

import { InnertubeError } from '../../utils/Utils';

class Recap {
  #page;
  #actions;

  header;
  sections;

  constructor(response: ApiResponse, actions: Actions) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    const header = this.#page.header?.item();

    this.header = header?.is(MusicElementHeader) ?
      this.#page.header?.item().as(MusicElementHeader).element?.model?.item().as(HighlightsCarousel) :
      this.#page.header?.item().as(MusicHeader);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs.firstOfType(Tab);

    if (!tab)
      throw new InnertubeError('Target tab not found');

    this.sections = tab.content?.as(SectionList).contents.array().as(ItemSection, MusicCarouselShelf, Message);
  }

  /**
   * Retrieves recap playlist.
   */
  async getPlaylist() {
    if (!this.header)
      throw new InnertubeError('Header not found');

    if (!this.header.is(HighlightsCarousel))
      throw new InnertubeError('Recap playlist not available, check back later.');

    const endpoint = this.header.panels[0].text_on_tap_endpoint;
    const response = await endpoint.call(this.#actions, { client: 'YTMUSIC' });

    return new Playlist(response, this.#actions);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Recap;