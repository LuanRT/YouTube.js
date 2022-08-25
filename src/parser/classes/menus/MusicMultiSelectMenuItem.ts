import { YTNode } from '../../helpers';
import Text from '../misc/Text';
import NavigationEndpoint from '../NavigationEndpoint';

class MusicMultiSelectMenuItem extends YTNode {
  static type = 'MusicMultiSelectMenuItem';

  title: string;
  form_item_entity_key: string;
  selected_icon_type: string;
  endpoint?: NavigationEndpoint;
  selected: boolean;

  constructor(data: any) {
    super();

    this.title = new Text(data.title).text;
    this.form_item_entity_key = data.formItemEntityKey;
    this.selected_icon_type = data.selectedIcon?.iconType || null;
    const command = data.selectedCommand?.commandExecutorCommand?.commands?.find((command: any) => command.musicBrowseFormBinderCommand?.browseEndpoint);
    if (command) {
      /**
       * At this point, endpoint will still be missing `form_data` field which is required for
       * selection to take effect. This can only be obtained from the response data which
       * we don't have here. We shall delegate this task back to `Parser`.
       */
      this.endpoint = new NavigationEndpoint(command.musicBrowseFormBinderCommand);
    }
    /**
     * Inferring selected state from existence of endpoint. `Parser` shall
     * update this with the definitive value obtained from response data.
     */
    this.selected = !!this.endpoint;
  }
}

export default MusicMultiSelectMenuItem;