import Tab from '../parser/classes/Tab';
import { InnertubeError } from '../utils/Utils';
import Actions from './Actions';
import Feed from './Feed';

class TabbedFeed extends Feed {
  #tabs;
  #actions;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);
    this.#actions = actions;
    this.#tabs = this.page.contents_memo.getType(Tab);
  }

  get tabs() {
    return this.#tabs.map((tab) => tab.title.toString());
  }

  async getTab(title: string) {
    const tab = this.#tabs.find((tab) => tab.title.toLowerCase() === title.toLowerCase());

    if (!tab)
      throw new InnertubeError(`Tab "${title}" not found`);

    if (tab.selected)
      return this;

    const response = await tab.endpoint.call(this.#actions);

    if (!response)
      throw new InnertubeError('Failed to call endpoint');

    return new TabbedFeed(this.#actions, response.data, false);
  }

  get title() {
    return this.page.contents_memo.getType(Tab)?.find((tab) => tab.selected)?.title.toString();
  }
}

export default TabbedFeed;