import Tab from '../parser/classes/Tab.js';
import Feed from './Feed.js';
import { InnertubeError } from '../utils/Utils.js';

import type Actions from './Actions.js';
import type { ObservedArray } from '../parser/helpers.js';

class TabbedFeed extends Feed {
  #tabs: ObservedArray<Tab>;
  #actions: Actions;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);
    this.#actions = actions;
    this.#tabs = this.page.contents_memo.getType(Tab);
  }

  get tabs(): string[] {
    return this.#tabs.map((tab) => tab.title.toString());
  }

  async getTabByName(title: string): Promise<TabbedFeed> {
    const tab = this.#tabs.find((tab) => tab.title.toLowerCase() === title.toLowerCase());

    if (!tab)
      throw new InnertubeError(`Tab "${title}" not found`);

    if (tab.selected)
      return this;

    const response = await tab.endpoint.call(this.#actions);

    return new TabbedFeed(this.#actions, response.data, false);
  }

  async getTabByURL(url: string): Promise<TabbedFeed> {
    const tab = this.#tabs.find((tab) => tab.endpoint.metadata.url?.split('/').pop() === url);

    if (!tab)
      throw new InnertubeError(`Tab "${url}" not found`);

    if (tab.selected)
      return this;

    const response = await tab.endpoint.call(this.#actions);

    return new TabbedFeed(this.#actions, response.data, false);
  }

  hasTabWithURL(url: string): boolean {
    return this.#tabs.some((tab) => tab.endpoint.metadata.url?.split('/').pop() === url);
  }

  get title(): string | undefined {
    return this.page.contents_memo.getType(Tab)?.find((tab) => tab.selected)?.title.toString();
  }
}

export default TabbedFeed;