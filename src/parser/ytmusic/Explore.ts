import Parser, { ParsedResponse } from '..';

import Grid from '../classes/Grid';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicNavigationButton from '../classes/MusicNavigationButton';
import SectionList from '../classes/SectionList';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';

import type { ApiResponse } from '../../core/Actions';
import type { ObservedArray } from '../helpers';
import { InnertubeError } from '../../utils/Utils';

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