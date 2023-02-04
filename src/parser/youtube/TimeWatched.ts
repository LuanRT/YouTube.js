import Parser from '..';
import ItemSection from '../classes/ItemSection';
import SectionList from '../classes/SectionList';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';

import { InnertubeError } from '../../utils/Utils';
import type { ApiResponse } from '../../core/Actions';
import type { ObservedArray } from '../helpers';
import type { IBrowseResponse } from '../types';

class TimeWatched {
  #page: IBrowseResponse;
  contents?: ObservedArray<ItemSection>;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);

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