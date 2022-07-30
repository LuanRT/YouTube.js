import Parser, { ParsedResponse } from '..';

import { InnertubeError } from '../../utils/Utils';
import { AxioslikeResponse } from '../../core/Actions';

import Tab from '../classes/Tab';
import Grid from '../classes/Grid';
import SectionList from '../classes/SectionList';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';
import MusicNavigationButton from '../classes/MusicNavigationButton';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';

class Explore {
  #page;

  top_buttons;
  sections;

  constructor(response: AxioslikeResponse) {
    this.#page = Parser.parseResponse(response.data);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs.array().as(Tab).get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const section_list = tab.content.item().as(SectionList);

    this.top_buttons = section_list.contents.array().firstOfType(Grid)?.items.array().as(MusicNavigationButton) || ([] as MusicNavigationButton[]);
    this.sections = section_list.contents.array().getAll({ type: 'MusicCarouselShelf' }) as MusicCarouselShelf[];
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Explore;