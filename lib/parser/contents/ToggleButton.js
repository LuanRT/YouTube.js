const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class ToggleButton {
  type = 'ToggleButton';

  constructor(item) {
    this.is_toggled = item.isToggled;
    this.is_disabled = item.isDisabled;
    this.default_service_endpoint = item.defaultServiceEndpoint && new NavigationEndpoint(item.defaultServiceEndpoint);
    this.toggled_service_endpoint = item.toggledServiceEndpoint && new NavigationEndpoint(item.toggledServiceEndpoint);
    this.default_navigation_endpoint = item.defaultNavigationEndpoint && new NavigationEndpoint(item.defaultNavigationEndpoint);
    this.default_tooltip = item.defaultTooltip;
    this.toggled_tooltip = item.toggledTooltip;
    this.default_text = new Text(item.defaultText);
    this.toggled_text = new Text(item.toggledText);
  }

  get endpoint() {
    if (this.default_navigation_endpoint) {
      return this.default_navigation_endpoint;
    }
    if (this.is_toggled && this.toggled_service_endpoint) {
      return this.toggled_service_endpoint;
    }
    if (!this.is_toggled && this.default_service_endpoint) {
      return this.default_service_endpoint;
    }
    return null;
  }

  get tooltip() {
    if (this.is_toggled) {
      return this.toggled_tooltip;
    }
    return this.default_tooltip;
  }

  get text() {
    if (this.is_toggled) {
      return this.toggled_text;
    }
    return this.default_text;
  }
}

module.exports = ToggleButton;