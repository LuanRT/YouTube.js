import Parser, { ParsedResponse } from '../index.js';

import Grid from '../classes/Grid.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicNavigationButton from '../classes/MusicNavigationButton.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';

import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray } from '../helpers.js';
import { InnertubeError } from '../../utils/Utils.js';

class Explore {
  #page: ParsedResponse;

  top_buttons: MusicNavigationButton[];
  sections: ObservedArray<MusicCarouselShelf>;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const section_list = tab.content?.as(SectionList);

    if (!section_list)
      throw new InnertubeError('Target tab did not have any content.');

    this.top_buttons = section_list.contents.firstOfType(Grid)?.items.as(MusicNavigationButton) || [];
    this.sections = section_list.contents.filterType(MusicCarouselShelf);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Explore;