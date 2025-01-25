import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ThumbnailHoverOverlayView from './ThumbnailHoverOverlayView.js';
import ThumbnailOverlayBadgeView from './ThumbnailOverlayBadgeView.js';
import Thumbnail from './misc/Thumbnail.js';

export type ThumbnailBackgroundColor = {
  light_theme: number;
  dark_theme: number;
};

export default class ThumbnailView extends YTNode {
  static type = 'ThumbnailView';

  public image: Thumbnail[];
  public overlays: (ThumbnailOverlayBadgeView | ThumbnailHoverOverlayView)[];
  public background_color?: ThumbnailBackgroundColor;

  constructor(data: RawNode) {
    super();

    this.image = Thumbnail.fromResponse(data.image);
    this.overlays = Parser.parseArray(data.overlays, [ ThumbnailOverlayBadgeView, ThumbnailHoverOverlayView ]);
    
    if ('backgroundColor' in data) {
      this.background_color = {
        light_theme: data.backgroundColor.lightTheme,
        dark_theme: data.backgroundColor.darkTheme
      };
    }
  }
}