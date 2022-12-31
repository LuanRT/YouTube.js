import Parser, { ParsedResponse } from '..';
import ItemSection from '../classes/ItemSection';
import SectionList from '../classes/SectionList';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';

import { InnertubeError } from '../../utils/Utils';
import type { ApiResponse } from '../../core/Actions';
import type { ObservedArray } from '../helpers';

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