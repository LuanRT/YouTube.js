import Parser, { ParsedResponse } from '../index.js';
import ItemSection from '../classes/ItemSection.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';

import { InnertubeError } from '../../utils/Utils.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray } from '../helpers.js';

class TimeWatched {
  #page: ParsedResponse;
  contents?: ObservedArray<ItemSection>;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    this.contents = tab.content?.as(SectionList).contents.as(ItemSection);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default TimeWatched;