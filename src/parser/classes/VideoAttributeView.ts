import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';

import ContentPreviewImageView from './ContentPreviewImageView.js';
import { Parser } from '../index.js';

import type { RawNode } from '../types/index.js';
import Thumbnail from './misc/Thumbnail.js';

export default class VideoAttributeView extends YTNode {
  static type = 'VideoAttributeView';

  image: ContentPreviewImageView | Thumbnail[] | null;
  image_style: string;
  title: string;
  subtitle: string;
  secondary_subtitle?: {
    content: string
  };
  orientation: string;
  sizing_rule: string;
  overflow_menu_on_tap: NavigationEndpoint;
  overflow_menu_a11y_label: string;

  constructor(data: RawNode) {
    super();

    if (data.image?.sources) {
      this.image = Thumbnail.fromResponse(data.image);
    } else {
      this.image = Parser.parseItem(data.image, ContentPreviewImageView);
    }

    this.image_style = data.imageStyle;
    this.title = data.title;
    this.subtitle = data.subtitle;

    if (Reflect.has(data, 'secondarySubtitle')) {
      this.secondary_subtitle = {
        content: data.secondarySubtitle.content
      };
    }

    this.orientation = data.orientation;
    this.sizing_rule = data.sizingRule;
    this.overflow_menu_on_tap = new NavigationEndpoint(data.overflowMenuOnTap);
    this.overflow_menu_a11y_label = data.overflowMenuA11yLabel;
  }
}