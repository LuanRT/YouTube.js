import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ToggleButton extends YTNode {
  static type = 'ToggleButton';

  text: Text;
  toggled_text: Text;
  tooltip: string;
  toggled_tooltip: string;
  is_toggled: boolean;
  is_disabled: boolean;
  icon_type: string;
  like_count?: number;
  short_like_count?: string;
  endpoint: NavigationEndpoint;
  toggled_endpoint: NavigationEndpoint;
  button_id?: string;
  target_id?: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.defaultText);
    this.toggled_text = new Text(data.toggledText);
    this.tooltip = data.defaultTooltip;
    this.toggled_tooltip = data.toggledTooltip;
    this.is_toggled = data.isToggled;
    this.is_disabled = data.isDisabled;
    this.icon_type = data.defaultIcon?.iconType;

    const acc_label =
      data?.defaultText?.accessibility?.accessibilityData?.label ||
      data?.accessibilityData?.accessibilityData?.label ||
      data?.accessibility?.label;

    if (this.icon_type == 'LIKE') {
      this.like_count = parseInt(acc_label.replace(/\D/g, ''));
      this.short_like_count = new Text(data.defaultText).toString();
    }

    this.endpoint =
      data.defaultServiceEndpoint?.commandExecutorCommand?.commands ?
        new NavigationEndpoint(data.defaultServiceEndpoint.commandExecutorCommand.commands.pop()) :
        new NavigationEndpoint(data.defaultServiceEndpoint);

    this.toggled_endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);

    if (Reflect.has(data, 'toggleButtonSupportedData') && Reflect.has(data.toggleButtonSupportedData, 'toggleButtonIdData')) {
      this.button_id = data.toggleButtonSupportedData.toggleButtonIdData.id;
    }

    if (Reflect.has(data, 'targetId')) {
      this.target_id = data.targetId;
    }
  }
}