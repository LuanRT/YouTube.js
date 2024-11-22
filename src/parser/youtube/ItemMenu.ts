import Menu from '../classes/menus/Menu.js';
import Button from '../classes/Button.js';
import MenuServiceItem from '../classes/menus/MenuServiceItem.js';

import type { Actions } from '../../core/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { IParsedResponse } from '../types/index.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';

export default class ItemMenu {
  readonly #page: IParsedResponse;
  readonly #actions: Actions;
  readonly #items: ObservedArray<YTNode>;

  constructor(data: IParsedResponse, actions: Actions) {
    this.#page = data;
    this.#actions = actions;

    const menu = data?.live_chat_item_context_menu_supported_renderers;

    if (!menu || !menu.is(Menu))
      throw new InnertubeError('Response did not have a "live_chat_item_context_menu_supported_renderers" property. The call may have failed.');

    this.#items = menu.as(Menu).items;
  }

  async selectItem(icon_type: string): Promise<IParsedResponse>
  async selectItem(button: Button): Promise<IParsedResponse>
  async selectItem(item: string | Button): Promise<IParsedResponse> {
    let endpoint: NavigationEndpoint | undefined;

    if (item instanceof Button) {
      if (!item.endpoint)
        throw new InnertubeError('Item does not have an endpoint.');

      endpoint = item.endpoint;
    } else {
      const button = this.#items.find((button) => {
        if (!button.is(MenuServiceItem)) {
          return false;
        }
        const menuServiceItem = button.as(MenuServiceItem);
        return menuServiceItem.icon_type === item;
      });

      if (!button || !button.is(MenuServiceItem))
        throw new InnertubeError(`Button "${item}" not found.`);

      endpoint = button.endpoint;
    }

    if (!endpoint)
      throw new InnertubeError('Target button does not have an endpoint.');

    return await endpoint.call(this.#actions, { parse: true });
  }

  items(): ObservedArray<YTNode> {
    return this.#items;
  }

  page(): IParsedResponse {
    return this.#page;
  }
}