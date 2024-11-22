import { Feed } from './index.js';
import { InnertubeError } from '../../utils/Utils.js';
import Tab from '../../parser/classes/Tab.js';

import type { Actions, ApiResponse } from '../index.js';
import type { ObservedArray } from '../../parser/helpers.js';
import type { IParsedResponse } from '../../parser/index.js';

export default class TabbedFeed<T extends IParsedResponse> extends Feed<T> {
  readonly #actions: Actions;
  #tabs?: ObservedArray<Tab>;

  constructor(actions: Actions, data: ApiResponse | IParsedResponse, already_parsed = false) {
    super(actions, data, already_parsed);
    this.#actions = actions;
    this.#tabs = this.page.contents_memo?.getType(Tab);
  }

  get tabs(): string[] {
    return this.#tabs?.map((tab) => tab.title.toString()) ?? [];
  }

  async getTabByName(title: string): Promise<TabbedFeed<T>> {
    const tab = this.#tabs?.find((tab) => tab.title.toLowerCase() === title.toLowerCase());

    if (!tab)
      throw new InnertubeError(`Tab "${title}" not found`);

    if (tab.selected)
      return this;

    const response = await tab.endpoint.call(this.#actions);

    return new TabbedFeed<T>(this.#actions, response, false);
  }

  async getTabByURL(url: string): Promise<TabbedFeed<T>> {
    const tab = this.#tabs?.find((tab) => tab.endpoint.metadata.url?.split('/').pop() === url);

    if (!tab)
      throw new InnertubeError(`Tab "${url}" not found`);

    if (tab.selected)
      return this;

    const response = await tab.endpoint.call(this.#actions);

    return new TabbedFeed<T>(this.#actions, response, false);
  }

  hasTabWithURL(url: string): boolean {
    return this.#tabs?.some((tab) => tab.endpoint.metadata.url?.split('/').pop() === url) ?? false;
  }

  get title(): string | undefined {
    return this.page.contents_memo?.getType(Tab)?.find((tab) => tab.selected)?.title.toString();
  }
}