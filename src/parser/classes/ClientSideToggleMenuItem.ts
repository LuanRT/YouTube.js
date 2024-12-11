import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class ClientSideToggleMenuItem extends YTNode {
  static type = 'ClientSideToggleMenuItem';

  text: Text;
  icon_type: string;
  toggled_text: Text;
  toggled_icon_type: string;
  is_toggled?: boolean;
  menu_item_identifier: string;
  endpoint: NavigationEndpoint;
  logging_directives?: {
    visibility: {
      types: string;
    },
    enable_displaylogger_experiment: boolean;
  };

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.defaultText);
    this.icon_type = data.defaultIcon.iconType;
    this.toggled_text = new Text(data.toggledText);
    this.toggled_icon_type = data.toggledIcon.iconType;
    
    if (Reflect.has(data, 'isToggled')) {
      this.is_toggled = data.isToggled;
    }

    this.menu_item_identifier = data.menuItemIdentifier;
    this.endpoint = new NavigationEndpoint(data.command);

    if (Reflect.has(data, 'loggingDirectives')) {
      this.logging_directives = {
        visibility: {
          types: data.loggingDirectives.visibility.types
        },
        enable_displaylogger_experiment: data.loggingDirectives.enableDisplayloggerExperiment
      };
    }
  }
}
