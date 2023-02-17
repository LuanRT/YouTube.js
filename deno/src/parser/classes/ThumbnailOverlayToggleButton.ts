import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class ThumbnailOverlayToggleButton extends YTNode {
  static type = 'ThumbnailOverlayToggleButton';

  is_toggled: boolean | null;

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

  constructor(data: any) {
    super();
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

export default ThumbnailOverlayToggleButton;