import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

class ActionButton {
  static type = 'ActionButton';

  icon_name: string;
  endpoint: NavigationEndpoint;
  a11y_text: string;
  style: string;

  constructor(data: RawNode) {
    this.icon_name = data.iconName;
    this.endpoint = new NavigationEndpoint(data.onTap);
    this.a11y_text = data.a11yText;
    this.style = data.style;
  }
}

class Panel {
  static type = 'Panel';

  image: Thumbnail[];

  content_mode: string;
  crop_options: string;
  image_aspect_ratio: string;
  caption: string;
  action_buttons: ActionButton[];

  constructor (data: RawNode) {
    this.image = Thumbnail.fromResponse(data.image.image);
    this.content_mode = data.image.contentMode;
    this.crop_options = data.image.cropOptions;
    this.image_aspect_ratio = data.imageAspectRatio;
    this.caption = data.caption;
    this.action_buttons = data.actionButtons.map((el: RawNode) => new ActionButton(el));
  }
}

export default class MusicLargeCardItemCarousel extends YTNode {
  static type = 'MusicLargeCardItemCarousel';

  panels: Panel[];
  header;

  constructor(data: RawNode) {
    super();
    // TODO: check this
    this.header = data.shelf.header;
    this.panels = data.shelf.panels.map((el: RawNode) => new Panel(el));
  }
}