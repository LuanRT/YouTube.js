import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ThumbnailHoverOverlayView from './ThumbnailHoverOverlayView.js';
import ThumbnailOverlayBadgeView from './ThumbnailOverlayBadgeView.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ThumbnailView extends YTNode {
  static type = 'ThumbnailView';

  image: Thumbnail[];
  overlays: (ThumbnailOverlayBadgeView | ThumbnailHoverOverlayView)[];
  background_color: {
    light_theme: number;
    dark_theme: number;
  };

  constructor(data: RawNode) {
    super();

    this.image = Thumbnail.fromResponse(data.image);
    this.overlays = Parser.parseArray(data.overlays, [ ThumbnailOverlayBadgeView, ThumbnailHoverOverlayView ]);
    this.background_color = {
      light_theme: data.backgroundColor.lightTheme,
      dark_theme: data.backgroundColor.darkTheme
    };
  }
}