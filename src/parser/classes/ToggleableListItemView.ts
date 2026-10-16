import type { RawNode } from '../types/RawResponse.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';

import ListItemView from './ListItemView.js';

export default class ToggleableListItemView extends YTNode {
  static type = 'ToggleableListItemView';

  public default_list_item: ListItemView | null;
  public toggled_list_item: ListItemView | null;
  public initial_state: {
    is_toggled: boolean;
  };
  public entity_key?: string;
  public entity_selector_type?: string;

  constructor(data: RawNode) {
    super();

    this.default_list_item = Parser.parseItem(data.defaultListItem, ListItemView);
    this.toggled_list_item = Parser.parseItem(data.toggledListItem, ListItemView);

    this.initial_state = {
      is_toggled: !!data.initialState?.isToggled
    };

    this.entity_key = data.entityKey;
    this.entity_selector_type = data.entitySelectorType;
  }

  /**
   * The list item matching the current toggle state.
   */
  get list_item(): ListItemView | null {
    return this.initial_state.is_toggled ? this.toggled_list_item : this.default_list_item;
  }

  get is_toggled(): boolean {
    return this.initial_state.is_toggled;
  }
}