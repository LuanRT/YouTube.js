import { Parser } from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';

import CompactLink from '../classes/CompactLink.js';
import ItemSection from '../classes/ItemSection.js';
import PageIntroduction from '../classes/PageIntroduction.js';
import SectionList from '../classes/SectionList.js';
import SettingsOptions from '../classes/SettingsOptions.js';
import SettingsSidebar from '../classes/SettingsSidebar.js';
import SettingsSwitch from '../classes/SettingsSwitch.js';
import CommentsHeader from '../classes/comments/CommentsHeader.js';
import ItemSectionHeader from '../classes/ItemSectionHeader.js';
import ItemSectionTabbedHeader from '../classes/ItemSectionTabbedHeader.js';
import TwoColumnBrowseResults from '../classes/TwoColumnBrowseResults.js';

import type { ApiResponse, Actions } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';

export default class Settings {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;

  public sidebar?: SettingsSidebar;
  public introduction?: PageIntroduction;
  public sections;

  constructor(actions: Actions, response: ApiResponse) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    this.sidebar = this.#page.sidebar?.as(SettingsSidebar);

    if (!this.#page.contents)
      throw new InnertubeError('Page contents not found');

    const tab = this.#page.contents.item().as(TwoColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Target tab not found');

    const contents = tab.content?.as(SectionList).contents.as(ItemSection);

    this.introduction = contents?.shift()?.contents?.firstOfType(PageIntroduction);

    this.sections = contents?.map((el: ItemSection) => ({
      title: el.header?.is(CommentsHeader, ItemSectionHeader, ItemSectionTabbedHeader) ? el.header.title.toString() : null,
      contents: el.contents
    }));
  }

  /**
   * Selects an item from the sidebar menu. Use {@link sidebar_items} to see available items.
   */
  async selectSidebarItem(target_item: string | CompactLink): Promise<Settings> {
    if (!this.sidebar)
      throw new InnertubeError('Sidebar not available');

    let item: CompactLink | undefined;

    if (typeof target_item === 'string') {
      item = this.sidebar.items.get({ title: target_item });
      if (!item)
        throw new InnertubeError(`Item "${target_item}" not found`, { available_items: this.sidebar_items });
    } else if (target_item?.is(CompactLink)) {
      item = target_item;
    } else {
      throw new InnertubeError('Invalid item', { target_item });
    }

    const response = await item.endpoint.call(this.#actions, { parse: false });

    return new Settings(this.#actions, response);
  }

  /**
   * Finds a setting by name and returns it. Use {@link setting_options} to see available options.
   */
  getSettingOption(name: string): SettingsSwitch {
    if (!this.sections)
      throw new InnertubeError('Sections not available');

    for (const section of this.sections) {
      if (!section.contents) continue;
      for (const el of section.contents) {
        const options = el.as(SettingsOptions).options;
        if (options) {
          for (const option of options) {
            if (
              option.is(SettingsSwitch) &&
              option.title?.toString() === name
            )
              return option;
          }
        }
      }
    }

    throw new InnertubeError(`Option "${name}" not found`, { available_options: this.setting_options });
  }

  /**
   * Returns settings available in the page.
   */
  get setting_options(): string[] {
    if (!this.sections)
      throw new InnertubeError('Sections not available');

    let options: any[] = [];

    for (const section of this.sections) {
      if (!section.contents) continue;
      for (const el of section.contents) {
        if (el.as(SettingsOptions).options)
          options = options.concat(el.as(SettingsOptions).options);
      }
    }

    return options.map((opt) => opt.title?.toString()).filter((el) => el);
  }

  /**
   * Returns options available in the sidebar.
   */
  get sidebar_items(): string[] {
    if (!this.sidebar)
      throw new InnertubeError('Sidebar not available');

    return this.sidebar.items.map((item) => item.title.toString());
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}