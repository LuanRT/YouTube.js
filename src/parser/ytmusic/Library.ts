import Parser, { ParsedResponse } from '..';
import Actions, { ApiResponse } from '../../core/Actions';

import Grid from '../classes/Grid';
import MusicShelf from '../classes/MusicShelf';
import MusicSideAlignedItem from '../classes/MusicSideAlignedItem';
import NavigationEndpoint from '../classes/NavigationEndpoint';
import SectionList from '../classes/SectionList';

import ChipCloud from '../classes/ChipCloud';
import ChipCloudChip from '../classes/ChipCloudChip';
import MusicMultiSelectMenuItem from '../classes/menus/MusicMultiSelectMenuItem';
import MusicSortFilterButton from '../classes/MusicSortFilterButton';
import MusicMenuItemDivider from '../classes/menus/MusicMenuItemDivider';

import { InnertubeError } from '../../utils/Utils';

class Library {
  #page;
  #actions;
  #continuation;

  header;
  contents;

  constructor(response: ApiResponse, actions: Actions) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    const section_list = this.#page.contents_memo.getType(SectionList)?.[0];

    this.header = section_list?.header?.item().as(MusicSideAlignedItem);
    this.contents = section_list?.contents?.array().as(Grid, MusicShelf);

    this.#continuation = this.contents?.find((list: Grid | MusicShelf) => list.continuation)?.continuation;
  }

  /**
   * Applies given sort filter to the library items.
   */
  async applySortFilter(sort_by: string | MusicMultiSelectMenuItem) {
    let target_item: MusicMultiSelectMenuItem | undefined;

    if (typeof sort_by === 'string') {
      const button = this.#page.contents_memo.getType(MusicSortFilterButton)?.[0];

      const options = button.menu?.options
        .filter(
          (item: MusicMultiSelectMenuItem | MusicMenuItemDivider) => item instanceof MusicMultiSelectMenuItem
        ) as MusicMultiSelectMenuItem[];

      target_item = options?.find((item) => item.title === sort_by);

      if (!target_item)
        throw new InnertubeError(`Sort filter "${sort_by}" not found`, { available_filters: options.map((item) => item.title) });
    } else if (sort_by instanceof MusicMultiSelectMenuItem) {
      target_item = sort_by;
    }

    if (!target_item)
      throw new InnertubeError('Invalid sort filter');

    if (target_item.selected)
      return this;

    const cmd = target_item.endpoint?.payload?.commands?.find((cmd: any) => cmd.browseSectionListReloadEndpoint)?.browseSectionListReloadEndpoint;

    if (!cmd)
      throw new InnertubeError('Failed to find sort filter command');

    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      continuation: cmd.continuation.reloadContinuationData.continuation
    });

    return new Library(response, this.#actions);
  }

  /**
   * Applies given filter to the library.
   */
  async applyFilter(filter: string | ChipCloudChip): Promise<Library> {
    let target_chip: ChipCloudChip | undefined;

    const chip_cloud = this.#page.contents_memo.getType(ChipCloud)?.[0];

    if (typeof filter === 'string') {
      target_chip = chip_cloud.chips.get({ text: filter });

      if (!target_chip)
        throw new InnertubeError(`Filter "${filter}" not found`, { available_filters: this.filters });
    } else if (filter instanceof ChipCloudChip) {
      target_chip = filter;
    }

    if (!target_chip)
      throw new InnertubeError('Invalid filter', filter);

    const target_cmd = new NavigationEndpoint(target_chip.endpoint?.payload?.commands?.[0]);
    const response = await target_cmd.call(this.#actions, { client: 'YTMUSIC' });

    return new Library(response, this.#actions);
  }

  /**
   * Retrieves continuation of the library items.
   */
  async getContinuation(): Promise<LibraryContinuation> {
    if (!this.#continuation)
      throw new InnertubeError('No continuation available');

    const page = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      continuation: this.#continuation
    });

    return new LibraryContinuation(page, this.#actions);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get sort_filters(): string[] {
    const button = this.#page.contents_memo.getType(MusicSortFilterButton)?.[0];
    const options = button.menu?.options.filter((item: MusicMultiSelectMenuItem | MusicMenuItemDivider) => item instanceof MusicMultiSelectMenuItem) as MusicMultiSelectMenuItem[];
    return options.map((item) => item.title);
  }

  get filters(): string[] {
    return this.#page.contents_memo.getType(ChipCloud)?.[0].chips.map((chip: ChipCloudChip) => chip.text);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

class LibraryContinuation {
  #page;
  #actions;
  #continuation;

  contents;

  constructor(response: ApiResponse, actions: Actions) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    this.contents = this.#page.continuation_contents?.hasKey('contents')
      ? this.#page.continuation_contents?.key('contents').array() :
      this.#page.continuation_contents?.key('items').array();

    this.#continuation = this.#page.continuation_contents?.key('continuation').isNull()
      ? null : this.#page.continuation_contents?.key('continuation').string();
  }

  async getContinuation(): Promise<LibraryContinuation> {
    if (!this.#continuation)
      throw new InnertubeError('No continuation available');

    const page = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      continuation: this.#continuation
    });

    return new LibraryContinuation(page, this.#actions);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export { LibraryContinuation };
export default Library;