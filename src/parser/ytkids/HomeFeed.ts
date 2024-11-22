import { InnertubeError } from '../../utils/Utils.js';

import Feed from '../../core/mixins/Feed.js';
import KidsCategoriesHeader from '../classes/ytkids/KidsCategoriesHeader.js';
import KidsCategoryTab from '../classes/ytkids/KidsCategoryTab.js';
import KidsHomeScreen from '../classes/ytkids/KidsHomeScreen.js';

import type { ApiResponse, Actions } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';

export default class HomeFeed extends Feed<IBrowseResponse> {
  public header?: KidsCategoriesHeader;
  public contents?: KidsHomeScreen;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = this.page.header?.item().as(KidsCategoriesHeader);
    this.contents = this.page.contents?.item().as(KidsHomeScreen);
  }

  /**
   * Retrieves the contents of the given category tab. Use {@link HomeFeed.categories} to get a list of available categories.
   * @param tab - The tab to select
   */
  async selectCategoryTab(tab: string | KidsCategoryTab): Promise<HomeFeed> {
    let target_tab: KidsCategoryTab | undefined;

    if (typeof tab === 'string') {
      target_tab = this.header?.category_tabs.find((t) => t.title.toString() === tab);
    } else if (tab?.is(KidsCategoryTab)) {
      target_tab = tab;
    }

    if (!target_tab)
      throw new InnertubeError(`Tab "${tab}" not found`);

    const page = await target_tab.endpoint.call<IBrowseResponse>(this.actions, { client: 'YTKIDS', parse: true });

    // Copy over the header and header memo
    page.header = this.page.header;
    page.header_memo = this.page.header_memo;

    return new HomeFeed(this.actions, page, true);
  }

  get categories(): string[] {
    return this.header?.category_tabs.map((tab) => tab.title.toString()) || [];
  }
}