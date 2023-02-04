import Feed from '../../core/Feed';
import ItemSection from '../classes/ItemSection';
import { InnertubeError } from '../../utils/Utils';
import type Actions from '../../core/Actions';
import type { ObservedArray, YTNode } from '../helpers';
import type { ISearchResponse } from '../types';
import type { ApiResponse } from '../../core/Actions';

class Search extends Feed<ISearchResponse> {
  estimated_results: number;
  contents: ObservedArray<YTNode> | null;

  constructor(actions: Actions, data: ApiResponse | ISearchResponse) {
    super(actions, data);
    this.estimated_results = this.page.estimated_results;

    const item_section = this.memo.getType(ItemSection).first();

    if (!item_section)
      throw new InnertubeError('No item section found in search response.');

    this.contents = item_section.contents;
  }
}

export default Search;