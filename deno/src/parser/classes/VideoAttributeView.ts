import { YTNode } from '../helpers.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

import ContentPreviewImageView from './ContentPreviewImageView.ts';
import { Parser } from '../index.ts';

import type { RawNode } from '../types/index.ts';
import Thumbnail from './misc/Thumbnail.ts';

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