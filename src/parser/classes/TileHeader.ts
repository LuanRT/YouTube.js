import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.js';
import TileMetadata from './TileMetadata.js';
import ThumbnailOverlayIcon from './ThumbnailOverlayIcon.js';
import ThumbnailOverlayResumePlayback from './ThumbnailOverlayResumePlayback.js';
import ThumbnailOverlayStackingEffect from './ThumbnailOverlayStackingEffect.js';

export default class TileHeader extends YTNode {
  static type = 'TileHeader';

  thumbnail: Thumbnail[];
  thumbnail_overlays: ObservedArray<ThumbnailOverlayTimeStatus | ThumbnailOverlayIcon | ThumbnailOverlayResumePlayback | ThumbnailOverlayStackingEffect | TileMetadata> | null;

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays, [ 
      ThumbnailOverlayTimeStatus, ThumbnailOverlayIcon, ThumbnailOverlayResumePlayback, ThumbnailOverlayStackingEffect, TileMetadata
    ]);
  }
}