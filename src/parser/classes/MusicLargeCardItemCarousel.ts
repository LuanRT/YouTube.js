import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class ActionButton {
  static type = 'ActionButton';

  icon_name: string;
  endpoint: NavigationEndpoint;
  a11y_text: string;
  style: string;

  constructor(data: any) {
    this.icon_name = data.iconName;
    this.endpoint = new NavigationEndpoint(data.onTap);
    this.a11y_text = data.a11yText;
    this.style = data.style;
  }
}

class Panel {
  static type = 'Panel';

  image: {
    url: string;
    width: number;
    height: number;
  }[];

  content_mode: string;
  crop_options: string;
  image_aspect_ratio: string;
  caption: string;
  action_buttons: ActionButton[];

  constructor (data: any) {
    this.image = data.image.image.sources;
    this.content_mode = data.image.contentMode;
    this.crop_options = data.image.cropOptions;
    this.image_aspect_ratio = data.imageAspectRatio;
    this.caption = data.caption;
    this.action_buttons = data.actionButtons.map((el: any) => new ActionButton(el));
  }
}

class MusicLargeCardItemCarousel extends YTNode {
  static type = 'MusicLargeCardItemCarousel';

  panels: Panel[];
  header;

  constructor(data: any) {
    super();
    // TODO: check this
    this.header = data.shelf.header;
    this.panels = data.shelf.panels.map((el: any) => new Panel(el));
  }
}

export default MusicLargeCardItemCarousel;