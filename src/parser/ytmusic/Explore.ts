import Parser, { ParsedResponse } from '..';

import { InnertubeError } from '../../utils/Utils';
import { ApiResponse } from '../../core/Actions';

import Grid from '../classes/Grid';
import SectionList from '../classes/SectionList';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';
import MusicNavigationButton from '../classes/MusicNavigationButton';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';

class Explore {
  #page;

  top_buttons;
  sections;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const section_list = tab.content?.as(SectionList);

    if (!section_list)
      throw new InnertubeError('Target tab did not have any content.');

    this.top_buttons = section_list.contents.array().firstOfType(Grid)?.items.as(MusicNavigationButton) || ([] as MusicNavigationButton[]);
    this.sections = section_list.contents.array().getAll({ type: 'MusicCarouselShelf' }) as MusicCarouselShelf[];
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Explore;