'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class ToggleButton {
  type = 'ToggleButton';
  
  constructor(data) {
    this.text = new Text(data.defaultText);
    this.toggled_text = new Text(data.toggledText);
    this.tooltip = data.defaultTooltip;
    this.toggled_tooltip = data.toggledTooltip;
    this.is_toggled = data.isToggled;
    this.is_disabled = data.isDisabled;
    this.icon_type = data.defaultIcon.iconType;
 
    this.icon_type == 'LIKE' && 
      (this.like_count = parseInt(data.defaultText.accessibility.accessibilityData.label.replace(/\D/g, ''))) &&
      (this.short_like_count = new Text(data.defaultText).toString());
  
    this.endpoint = data.defaultServiceEndpoint?.commandExecutorCommand?.commands && new NavigationEndpoint(data.defaultServiceEndpoint.commandExecutorCommand.commands.pop());
    this.toggled_endpoint = new NavigationEndpoint(data.toggledServiceEndpoint); 
  
    this.button_id = data.toggleButtonSupportedData?.toggleButtonIdData?.id;
    this.target_id = data.targetId;
  }
}

module.exports = ToggleButton;