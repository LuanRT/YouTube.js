import { YTNode } from '../../helpers.ts';
import Text from '../misc/Text.ts';
import NavigationEndpoint from '../NavigationEndpoint.ts';
import type { RawNode } from '../../index.ts';
class MusicMultiSelectMenuItem extends YTNode {
  static type = 'MusicMultiSelectMenuItem';

  title: string;
  form_item_entity_key: string;
  selected_icon_type: string;
  endpoint?: NavigationEndpoint | null;
  selected: boolean;

  constructor(data: RawNode) {
    super();

    this.title = new Text(data.title).text;
    this.form_item_entity_key = data.formItemEntityKey;
    this.selected_icon_type = data.selectedIcon?.iconType || null;
    this.endpoint = data.selectedCommand ? new NavigationEndpoint(data.selectedCommand) : null;
    this.selected = !!this.endpoint;
  }
}

export default MusicMultiSelectMenuItem;