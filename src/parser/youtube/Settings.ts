import Parser from '..';
import Actions, { ApiResponse } from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';

import Tab from '../classes/Tab';
import TwoColumnBrowseResults from '../classes/TwoColumnBrowseResults';
import SectionList from '../classes/SectionList';
import ItemSection from '../classes/ItemSection';

import PageIntroduction from '../classes/PageIntroduction';
import SettingsOptions from '../classes/SettingsOptions';
import SettingsSwitch from '../classes/SettingsSwitch';
import SettingsSidebar from '../classes/SettingsSidebar';

class Settings {
  #page;
  #actions;

  sidebar: SettingsSidebar | null | undefined;
  introduction: PageIntroduction | null | undefined;
  sections;

  constructor(actions: Actions, response: ApiResponse) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response.data);

    this.sidebar = this.#page.sidebar?.as(SettingsSidebar);

    const tab = this.#page.contents.item().as(TwoColumnBrowseResults).tabs.array().as(Tab).get({ selected: true });

    if (!tab)
      throw new InnertubeError('Target tab not found');

    const contents = tab.content?.as(SectionList).contents.as(ItemSection);

    this.introduction = contents?.shift()?.contents?.get({ type: 'PageIntroduction' })?.as(PageIntroduction);

    this.sections = contents?.map((el: ItemSection) => ({
      title: el.header?.title.toString() || null,
      contents: el.contents
    }));
  }

  /**
   * Selects an item from the sidebar menu. Use {@link sidebar_items} to see available items.
   */
  async selectSidebarItem(name: string) {
    if (!this.sidebar)
      throw new InnertubeError('Sidebar not available');

    const item = this.sidebar.items.get({ title: name });

    if (!item)
      throw new InnertubeError(`Item "${name}" not found`, { available_items: this.sidebar_items });

    const response = await item.endpoint.call(this.#actions, { parse: false });

    return new Settings(this.#actions, response);
  }

  /**
   * Finds a setting by name and returns it. Use {@link setting_options} to see available options.
   */
  getSettingOption(name: string) {
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
}

export default Settings;