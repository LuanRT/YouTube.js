import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode, observe } from '../helpers.ts';
import { type RawNode } from '../index.ts';

export class Panel extends YTNode {
  static type = 'Panel';

  thumbnail?: {
    image: {
      url: string;
      width: number;
      height: number;
    }[];
    endpoint: NavigationEndpoint;
    on_long_press_endpoint: NavigationEndpoint;
    content_mode: string;
    crop_options: string;
  };

  background_image: {
    image: {
      url: string;
      width: number;
      height: number;
    }[];
    gradient_image: {
      url: string;
      width: number;
      height: number;
    }[];
  };

  strapline: string;
  title: string;
  description: string;
  text_on_tap_endpoint: NavigationEndpoint;

  cta: {
    icon_name: string;
    title: string;
    endpoint: NavigationEndpoint;
    accessibility_text: string;
    state: string;
  };

  constructor(data: RawNode) {
    super();

    if (data.thumbnail) {
      this.thumbnail = {
        image: data.thumbnail.image.sources,
        endpoint: new NavigationEndpoint(data.thumbnail.onTap),
        on_long_press_endpoint: new NavigationEndpoint(data.thumbnail.onLongPress),
        content_mode: data.thumbnail.contentMode,
        crop_options: data.thumbnail.cropOptions
      };
    }

    this.background_image = {
      image: data.backgroundImage.image.sources,
      gradient_image: data.backgroundImage.gradientImage.sources
    };

    this.strapline = data.strapline;
    this.title = data.title;
    this.description = data.description;

    this.cta = {
      icon_name: data.cta.iconName,
      title: data.cta.title,
      endpoint: new NavigationEndpoint(data.cta.onTap),
      accessibility_text: data.cta.accessibilityText,
      state: data.cta.state
    };

    this.text_on_tap_endpoint = new NavigationEndpoint(data.textOnTap);
  }
}

export default class HighlightsCarousel extends YTNode {
  static type = 'HighlightsCarousel';

  panels: Panel[];

  constructor(data: RawNode) {
    super();
    this.panels = observe(data.highlightsCarousel.panels.map((el: RawNode) => new Panel(el)));
  }
}