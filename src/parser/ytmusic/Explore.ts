import { Parser } from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';

import Grid from '../classes/Grid.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicNavigationButton from '../classes/MusicNavigationButton.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';

import type { ApiResponse } from '../../core/index.js';
import type { ObservedArray } from '../helpers.js';
import type { IBrowseResponse } from '../types/index.js';

export default class Explore {
  readonly #page: IBrowseResponse;

  public top_buttons: MusicNavigationButton[];
  public sections: ObservedArray<MusicCarouselShelf>;

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