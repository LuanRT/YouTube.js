import { Parser } from '../index.js';
import ItemSection from '../classes/ItemSection.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';

import { InnertubeError } from '../../utils/Utils.js';
import type { ApiResponse } from '../../core/index.js';
import type { ObservedArray } from '../helpers.js';
import type { IBrowseResponse } from '../types/index.js';

class TimeWatched {
  #page: IBrowseResponse;
  contents?: ObservedArray<ItemSection>;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    if (!this.#page.contents)
      throw new InnertubeError('Page contents not found');

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    this.contents = tab.content?.as(SectionList).contents.as(ItemSection);
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}

export default TimeWatched;