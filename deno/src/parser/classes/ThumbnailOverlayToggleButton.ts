import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ThumbnailOverlayToggleButton extends YTNode {
  static type = 'ThumbnailOverlayToggleButton';

  is_toggled?: boolean;

  icon_type: {
    toggled: string;
    untoggled: string;
  };

  tooltip: {
    toggled: string;
    untoggled: string;
  };

  toggled_endpoint: NavigationEndpoint;
  untoggled_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'isToggled')) {
      this.is_toggled = data.isToggled;
    }

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