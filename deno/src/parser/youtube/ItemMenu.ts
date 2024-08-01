import Menu from '../classes/menus/Menu.ts';
import Button from '../classes/Button.ts';
import MenuServiceItem from '../classes/menus/MenuServiceItem.ts';

import type { Actions } from '../../core/index.ts';
import { InnertubeError } from '../../utils/Utils.ts';
import type { ObservedArray, YTNode } from '../helpers.ts';
import type { IParsedResponse } from '../types/index.ts';
import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';

export default class ItemMenu {
  #page: IParsedResponse;
  #actions: Actions;
  #items: ObservedArray<YTNode>;

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

    const response = await endpoint.call(this.#actions, { parse: true });

    return response;
  }

  items(): ObservedArray<YTNode> {
    return this.#items;
  }

  page(): IParsedResponse {
    return this.#page;
  }
}