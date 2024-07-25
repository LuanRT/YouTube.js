import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ThumbnailHoverOverlayView from './ThumbnailHoverOverlayView.ts';
import ThumbnailOverlayBadgeView from './ThumbnailOverlayBadgeView.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class ThumbnailView extends YTNode {
  static type = 'ThumbnailView';

  image: Thumbnail[];
  overlays: (ThumbnailOverlayBadgeView | ThumbnailHoverOverlayView)[];
  background_color?: {
    light_theme: number;
    dark_theme: number;
  };

  constructor(data: RawNode) {
    super();

    this.image = Thumbnail.fromResponse(data.image);
    this.overlays = Parser.parseArray(data.overlays, [ ThumbnailOverlayBadgeView, ThumbnailHoverOverlayView ]);
    if (data.backgroundColor) {
      this.background_color = {
        light_theme: data.backgroundColor.lightTheme,
        dark_theme: data.backgroundColor.darkTheme
      };
    }
  }
}