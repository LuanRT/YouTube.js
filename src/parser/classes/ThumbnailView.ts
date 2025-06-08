import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import AnimatedThumbnailOverlayView from './AnimatedThumbnailOverlayView.js';
import ThumbnailHoverOverlayView from './ThumbnailHoverOverlayView.js';
import ThumbnailOverlayBadgeView from './ThumbnailOverlayBadgeView.js';
import Thumbnail from './misc/Thumbnail.js';
import ThumbnailHoverOverlayToggleActionsView from './ThumbnailHoverOverlayToggleActionsView.js';
import ThumbnailBottomOverlayView from './ThumbnailBottomOverlayView.js';

export type ThumbnailBackgroundColor = {
  light_theme: number;
  dark_theme: number;
};

export default class ThumbnailView extends YTNode {
  static type = 'ThumbnailView';

  public image: Thumbnail[];
  public overlays: ObservedArray<
    ThumbnailHoverOverlayToggleActionsView | ThumbnailBottomOverlayView |
    ThumbnailOverlayBadgeView | ThumbnailHoverOverlayView
    | AnimatedThumbnailOverlayView
  >;
  public background_color?: ThumbnailBackgroundColor;

  constructor(data: RawNode) {
    super();

    this.image = Thumbnail.fromResponse(data.image);
    this.overlays = Parser.parseArray(data.overlays, [
      ThumbnailHoverOverlayToggleActionsView, ThumbnailBottomOverlayView,
      ThumbnailOverlayBadgeView, ThumbnailHoverOverlayView,
      AnimatedThumbnailOverlayView
    ]);

    if ('backgroundColor' in data) {
      this.background_color = {
        light_theme: data.backgroundColor.lightTheme,
        dark_theme: data.backgroundColor.darkTheme
      };
    }
  }
}