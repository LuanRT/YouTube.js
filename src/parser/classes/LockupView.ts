import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ThumbnailView from './ThumbnailView.js';
import CollectionThumbnailView from './CollectionThumbnailView.js';
import LockupMetadataView from './LockupMetadataView.js';
import ThumbnailBottomOverlayView from './ThumbnailBottomOverlayView.js';
import ThumbnailOverlayBadgeView from './ThumbnailOverlayBadgeView.js';
import RendererContext from './misc/RendererContext.js';

export type LockupContentType = 'UNSPECIFIED' | 'VIDEO' | 'PLAYLIST' | 'SHORT' | 'CHANNEL' | 'ALBUM' |
  'PRODUCT' | 'GAME' | 'CLIP' | 'PODCAST' | 'SOURCE' | 'SHOPPING_COLLECTION' | 'MOVIE' | 'STATION' | 'SHOW' | 'COURSE';

export interface LockupStyling {
  layout?: string;
  content_image_aspect_ratio?: string;
}

export default class LockupView extends YTNode {
  static type = 'LockupView';

  public content_image: CollectionThumbnailView | ThumbnailView | null;
  public metadata: LockupMetadataView | null;
  public content_id?: string;
  public content_type: LockupContentType;
  public styling?: LockupStyling;
  public renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();
    this.content_image = Parser.parseItem(data.contentImage, [ CollectionThumbnailView, ThumbnailView ]);
    this.metadata = Parser.parseItem(data.metadata, LockupMetadataView);
    this.content_id = data.contentId;
    this.content_type = data.contentType?.replace('LOCKUP_CONTENT_TYPE_', '') ?? 'UNSPECIFIED';

    if (Reflect.has(data, 'styling')) {
      this.styling = {
        layout: data.styling.layout?.replace('LOCKUP_LAYOUT_', ''),
        content_image_aspect_ratio: data.styling.contentImageAspectRatio?.replace('LOCKUP_CONTENT_IMAGE_ASPECT_RATIO_', '')
      };
    }

    this.renderer_context = new RendererContext(data.rendererContext);
  }

  /**
   * The video's duration, parsed from its thumbnail overlay badge (e.g. "16:09").
   * Returns an empty duration for lockups without one (playlists, channels, live videos, etc.).
   */
  get duration(): { text: string; seconds: number } {
    const thumbnail = this.content_image instanceof CollectionThumbnailView
      ? this.content_image.primary_thumbnail
      : this.content_image;

    for (const overlay of thumbnail?.overlays ?? []) {
      if (!overlay.is(ThumbnailBottomOverlayView, ThumbnailOverlayBadgeView))
        continue;

      for (const badge of overlay.badges) {
        if (!(/^\d{1,3}(?:,\d{3})*:\d{2}(?::\d{2})?$/).test(badge.text))
          continue;

        return { text: badge.text, seconds: timeToSeconds(badge.text) };
      }
    }

    return { text: '', seconds: 0 };
  }
}
