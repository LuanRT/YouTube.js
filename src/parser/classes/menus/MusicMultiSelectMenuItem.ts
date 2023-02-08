import { YTNode } from '../../helpers.js';
import Text from '../misc/Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

class MusicMultiSelectMenuItem extends YTNode {
  static type = 'MusicMultiSelectMenuItem';

  title: string;
  form_item_entity_key: string;
  selected_icon_type: string;
  endpoint?: NavigationEndpoint | null;
  selected: boolean;

  constructor(data: any) {
    super();

    this.title = new Text(data.title).toString();
    this.form_item_entity_key = data.formItemEntityKey;
    this.selected_icon_type = data.selectedIcon?.iconType || null;
    this.endpoint = data.selectedCommand ? new NavigationEndpoint(data.selectedCommand) : null;
    this.selected = !!this.endpoint;
  }
}

export default MusicMultiSelectMenuItem;