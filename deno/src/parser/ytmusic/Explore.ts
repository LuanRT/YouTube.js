import Parser from '../index.ts';

import Grid from '../classes/Grid.ts';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';
import MusicNavigationButton from '../classes/MusicNavigationButton.ts';
import SectionList from '../classes/SectionList.ts';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.ts';

import type { ApiResponse } from '../../core/Actions.ts';
import { InnertubeError } from '../../utils/Utils.ts';
import type { ObservedArray } from '../helpers.ts';
import type { IBrowseResponse } from '../types/ParsedResponse.ts';

class Explore {
  #page: IBrowseResponse;

  top_buttons: MusicNavigationButton[];
  sections: ObservedArray<MusicCarouselShelf>;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    const tab = this.#page.contents?.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const section_list = tab.content?.as(SectionList);

    if (!section_list)
      throw new InnertubeError('Target tab did not have any content.');

    this.top_buttons = section_list.contents.firstOfType(Grid)?.items.as(MusicNavigationButton) || [];
    this.sections = section_list.contents.filterType(MusicCarouselShelf);
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}

export default Explore;