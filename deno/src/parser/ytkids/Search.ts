import Feed from '../../core/mixins/Feed.ts';
import ItemSection from '../classes/ItemSection.ts';
import { InnertubeError } from '../../utils/Utils.ts';
import type Actions from '../../core/Actions.ts';
import type { ObservedArray, YTNode } from '../helpers.ts';
import type { ISearchResponse } from '../types/ParsedResponse.ts';
import type { ApiResponse } from '../../core/Actions.ts';

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