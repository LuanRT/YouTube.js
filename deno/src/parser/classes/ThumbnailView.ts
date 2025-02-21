import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import AnimatedThumbnailOverlayView from './AnimatedThumbnailOverlayView.ts';
import ThumbnailHoverOverlayView from './ThumbnailHoverOverlayView.ts';
import ThumbnailOverlayBadgeView from './ThumbnailOverlayBadgeView.ts';
import Thumbnail from './misc/Thumbnail.ts';
import ThumbnailHoverOverlayToggleActionsView from './ThumbnailHoverOverlayToggleActionsView.ts';
import ThumbnailBottomOverlayView from './ThumbnailBottomOverlayView.ts';

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