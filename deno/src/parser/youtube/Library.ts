import { InnertubeError } from '../../utils/Utils.ts';
import Feed from '../../core/mixins/Feed.ts';
import History from './History.ts';
import Playlist from './Playlist.ts';
import Menu from '../classes/menus/Menu.ts';
import Shelf from '../classes/Shelf.ts';
import Button from '../classes/Button.ts';
import PageHeader from '../classes/PageHeader.ts';

import type { Actions, ApiResponse } from '../../core/index.ts';
import type { IBrowseResponse } from '../types/index.ts';

export default class Library extends Feed<IBrowseResponse> {
  public header: PageHeader | null;
  public sections;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse) {
    super(actions, data);

    if (!this.page.contents_memo)
      throw new InnertubeError('Page contents not found');

    this.header = this.memo.getType(PageHeader)[0];

    const shelves = this.page.contents_memo.getType(Shelf);

    this.sections = shelves.map((shelf: Shelf) => ({
      type: shelf.icon_type,
      title: shelf.title,
      contents: shelf.content?.key('items').array() || [],
      getAll: () => this.#getAll(shelf)
    }));
  }

  async #getAll(shelf: Shelf): Promise<Playlist | History | Feed<IBrowseResponse>> {
    if (!shelf.menu?.as(Menu).top_level_buttons)

      throw new InnertubeError(`The ${shelf.title.text} shelf doesn't have more items`);

    const button = shelf.menu.as(Menu).top_level_buttons.firstOfType(Button);

    if (!button)
      throw new InnertubeError('Did not find target button.');

    const page = await button.as(Button).endpoint.call<IBrowseResponse>(this.actions, { parse: true });

    switch (shelf.icon_type) {
      case 'LIKE':
      case 'WATCH_LATER':
        return new Playlist(this.actions, page, true);
      case 'WATCH_HISTORY':
        return new History(this.actions, page, true);
      case 'CONTENT_CUT':
        return new Feed(this.actions, page, true);
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

  get playlists_section() {
    return this.sections.find((section) => section.type === 'PLAYLISTS');
  }

  get clips() {
    return this.sections.find((section) => section.type === 'CONTENT_CUT');
  }
}