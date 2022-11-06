import Parser, { ParsedResponse } from '..';
import Actions, { ApiResponse } from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';

import Feed from '../../core/Feed';
import History from './History';
import Playlist from './Playlist';

import Tab from '../classes/Tab';
import Menu from '../classes/menus/Menu';
import Shelf from '../classes/Shelf';
import Button from '../classes/Button';
import SectionList from '../classes/SectionList';
import ItemSection from '../classes/ItemSection';
import TwoColumnBrowseResults from '../classes/TwoColumnBrowseResults';

import ProfileColumn from '../classes/ProfileColumn';
import ProfileColumnStats from '../classes/ProfileColumnStats';
import ProfileColumnUserInfo from '../classes/ProfileColumnUserInfo';

class Library {
  #actions;
  #page;

  profile;
  sections;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response);

    const two_col = this.#page.contents.item().as(TwoColumnBrowseResults);

    if (!two_col)
      throw new InnertubeError('Response did not have a TwoColumnBrowseResults.');

    const tab = two_col.tabs.array().as(Tab).get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const stats = two_col.secondary_contents.item().as(ProfileColumn).items.array().get({ type: 'ProfileColumnStats' })?.as(ProfileColumnStats) || null;
    const user_info = two_col.secondary_contents.item().as(ProfileColumn).items.array().get({ type: 'ProfileColumnUserInfo' })?.as(ProfileColumnUserInfo) || null;

    this.profile = { stats, user_info };

    if (!tab.content)
      throw new InnertubeError('Target tab did not have any content.');

    const shelves = tab.content.as(SectionList).contents.array().as(ItemSection).map((is: ItemSection) => is.contents?.firstOfType(Shelf));

    this.sections = shelves.map((shelf: any) => ({
      type: shelf.icon_type,
      title: shelf.title,
      contents: shelf.content?.item().items.array() || [],
      getAll: () => this.#getAll(shelf)
    }));
  }

  async #getAll(shelf: Shelf): Promise<Playlist | History | Feed> {
    if (!shelf.menu?.item().as(Menu).hasKey('top_level_buttons'))
      throw new InnertubeError(`The ${shelf.title.text} shelf doesn't have more items`);

    const button = await shelf.menu.item().as(Menu).top_level_buttons.get({ text: 'See all' });

    if (!button)
      throw new InnertubeError('Did not find target button.');

    const page = await button.as(Button).endpoint.call(this.#actions, { parse: true });

    switch (shelf.icon_type) {
      case 'LIKE':
      case 'WATCH_LATER':
        return new Playlist(this.#actions, page, true);
      case 'WATCH_HISTORY':
        return new History(this.#actions, page, true);
      case 'CONTENT_CUT':
        return new Feed(this.#actions, page, true);
      default:
        throw new InnertubeError('Target shelf not implemented.');
    }
  }

  get history() {
    return this.sections.find((section) => section.type === 'WATCH_HISTORY');
  }

  get watch_later() {
    return this.sections.find((section) => section.type === 'WATCH_LATER');
  }

  get liked_videos() {
    return this.sections.find((section) => section.type === 'LIKE');
  }

  get playlists() {
    return this.sections.find((section) => section.type === 'PLAYLISTS');
  }

  get clips() {
    return this.sections.find((section) => section.type === 'CONTENT_CUT');
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Library;