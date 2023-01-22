import Feed from '../../core/Feed';
import Actions from '../../core/Actions';
import KidsCategoriesHeader from '../classes/ytkids/KidsCategoriesHeader';
import KidsCategoryTab from '../classes/ytkids/KidsCategoryTab';
import KidsHomeScreen from '../classes/ytkids/KidsHomeScreen';
import { InnertubeError } from '../../utils/Utils';

class HomeFeed extends Feed {
  header?: KidsCategoriesHeader;
  contents?: KidsHomeScreen;

  constructor(actions: Actions, data: any, already_parsed = false) {
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

    const page = await target_tab.endpoint.call(this.actions, { client: 'YTKIDS', parse: true });

    // Copy over the header and header memo
    page.header = this.page.header;
    page.header_memo = this.page.header_memo;

    return new HomeFeed(this.actions, page, true);
  }

  get categories(): string[] {
    return this.header?.category_tabs.map((tab) => tab.title.toString()) || [];
  }
}

export default HomeFeed;