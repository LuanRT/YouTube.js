import { YTNode } from '../helpers.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

import ContentPreviewImageView from './ContentPreviewImageView.ts';
import { Parser } from '../index.ts';

import type { RawNode } from '../types/index.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class VideoAttributeView extends YTNode {
  static type = 'VideoAttributeView';

  image: ContentPreviewImageView | {
    sources: Thumbnail[];
  } | null;
  image_style: string;
  title: string;
  subtitle: string;
  secondary_subtitle: {
    content: string
  };
  orientation: string;
  sizing_rule: string;
  overflow_menu_on_tap: NavigationEndpoint;
  overflow_menu_a11y_label: string;

  constructor(data: RawNode) {
    super();
    // @NOTE: "image" is not a renderer so not sure why we're parsing it as one. Leaving this hack here for now to avoid breaking things.
    if (data.image?.sources) {
      this.image = {
        sources: data.image.sources.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width)
      };
    } else {
      this.image = Parser.parseItem(data.image, ContentPreviewImageView);
    }

    this.image_style = data.imageStyle;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.secondary_subtitle = {
      content: data.secondarySubtitle.content
    };
    this.orientation = data.orientation;
    this.sizing_rule = data.sizingRule;
    this.overflow_menu_on_tap = new NavigationEndpoint(data.overflowMenuOnTap);
    this.overflow_menu_a11y_label = data.overflowMenuA11yLabel;
  }
}