import { Parser } from '../index.ts';
import ItemSection from '../classes/ItemSection.ts';
import SectionList from '../classes/SectionList.ts';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.ts';

import { InnertubeError } from '../../utils/Utils.ts';
import type { ApiResponse } from '../../core/Actions.ts';
import type { ObservedArray } from '../helpers.ts';
import type { IBrowseResponse } from '../types/ParsedResponse.ts';

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