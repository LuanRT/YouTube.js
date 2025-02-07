import Feed from '../../core/mixins/Feed.js';
import ItemSection from '../classes/ItemSection.js';
import { InnertubeError } from '../../utils/Utils.js';

import type { ApiResponse, Actions } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { ISearchResponse } from '../types/index.js';

export default class Search extends Feed<ISearchResponse> {
  public estimated_results?: number;
  public contents: ObservedArray<YTNode> | null;

  constructor(actions: Actions, data: ApiResponse | ISearchResponse) {
    super(actions, data);
    this.estimated_results = this.page.estimated_results;

    const item_section = this.memo.getType(ItemSection)[0];

    if (!item_section)
      throw new InnertubeError('No item section found in search response.');

    this.contents = item_section.contents;
  }
}