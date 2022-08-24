import Parser, { ParsedResponse } from '..';
import { AxioslikeResponse } from '../../core/Actions';

import ItemSection from '../classes/ItemSection';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';
import SectionList from '../classes/SectionList';

import { InnertubeError } from '../../utils/Utils';

class TimeWatched {
  #page;
  contents;

  constructor(response: AxioslikeResponse) {
    this.#page = Parser.parseResponse(response.data);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    this.contents = tab.content?.as(SectionList).contents.array().as(ItemSection);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default TimeWatched;