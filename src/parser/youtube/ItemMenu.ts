import Button from '../classes/Button';
import Menu from '../classes/menus/Menu';
import MenuServiceItem from '../classes/menus/MenuServiceItem';
import NavigationEndpoint from '../classes/NavigationEndpoint';

import type Actions from '../../core/Actions';
import type { ParsedResponse } from '..';
import { InnertubeError } from '../../utils/Utils';
import type { ObservedArray, YTNode } from '../helpers';

class ItemMenu {
  #page: ParsedResponse;
  #actions: Actions;
  #items: ObservedArray<YTNode>;

  constructor(data: ParsedResponse, actions: Actions) {
    this.#page = data;
    this.#actions = actions;

    const menu = data?.live_chat_item_context_menu_supported_renderers;

    if (!menu || !menu.is(Menu))
      throw new InnertubeError('Response did not have a "live_chat_item_context_menu_supported_renderers" property. The call may have failed.');

    this.#items = menu.as(Menu).items;
  }

  async selectItem(icon_type: string): Promise<ParsedResponse>
  async selectItem(button: Button): Promise<ParsedResponse>
  async selectItem(item: string | Button): Promise<ParsedResponse> {
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

  page(): ParsedResponse {
    return this.#page;
  }
}

export default ItemMenu;