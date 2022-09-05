import Parser, { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';

import Playlist from './Playlist';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicElementHeader from '../classes/MusicElementHeader';
import HighlightsCarousel from '../classes/HighlightsCarousel';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';

import Tab from '../classes/Tab';
import ItemSection from '../classes/ItemSection';
import SectionList from '../classes/SectionList';

import { InnertubeError } from '../../utils/Utils';

class Recap {
  #page;
  #actions;

  header;
  sections;

  constructor(response: AxioslikeResponse, actions: Actions) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    this.header = this.#page.header.item().as(MusicElementHeader).element?.model?.item().as(HighlightsCarousel);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs.firstOfType(Tab);

    if (!tab)
      throw new InnertubeError('Target tab not found');

    this.sections = tab.content?.as(SectionList).contents.array().as(ItemSection, MusicCarouselShelf);
  }

  /**
   * Retrieves recap playlist.
   */
  async getPlaylist() {
    if (!this.header)
      throw new InnertubeError('Header not found');

    const endpoint = this.header.panels[0].text_on_tap_endpoint;
    const response = await endpoint.callTest(this.#actions, { client: 'YTMUSIC' });

    return new Playlist(response, this.#actions);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Recap;