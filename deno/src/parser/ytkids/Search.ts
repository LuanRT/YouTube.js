import Feed from '../../core/mixins/Feed.ts';
import ItemSection from '../classes/ItemSection.ts';
import { InnertubeError } from '../../utils/Utils.ts';

import type { ApiResponse, Actions } from '../../core/index.ts';
import type { ObservedArray, YTNode } from '../helpers.ts';
import type { ISearchResponse } from '../types/index.ts';

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