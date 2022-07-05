'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');

class ThumbnailOverlayToggleButton {
  type = 'ThumbnailOverlayToggleButton';

  constructor(data) {
    this.is_toggled = data.isToggled || null;

    this.icon_type = {
      toggled: data.toggledIcon.iconType,
      untoggled: data.untoggledIcon.iconType
    };

    this.tooltip = {
      toggled: data.toggledTooltip,
      untoggled: data.untoggledTooltip
    };

    this.toggled_endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
    this.untoggled_endpoint = new NavigationEndpoint(data.untoggledServiceEndpoint);
  }
}

module.exports = ThumbnailOverlayToggleButton;