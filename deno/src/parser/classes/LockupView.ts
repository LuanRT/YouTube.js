import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import CollectionThumbnailView from './CollectionThumbnailView.ts';
import LockupMetadataView from './LockupMetadataView.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class LockupView extends YTNode {
  static type = 'LockupView';

  content_image: CollectionThumbnailView | null;
  metadata: LockupMetadataView | null;
  content_id: string;
  content_type: 'VIDEO' | 'MOVIE' | 'CHANNEL' | 'CLIP' | 'SOURCE' | 'PLAYLIST' | 'ALBUM' | 'PODCAST' | 'SHOPPING_COLLECTION' | 'SHORT' | 'GAME' | 'PRODUCT';
  on_tap_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();

    this.content_image = Parser.parseItem(data.contentImage, CollectionThumbnailView);
    this.metadata = Parser.parseItem(data.metadata, LockupMetadataView);
    this.content_id = data.contentId;
    this.content_type = data.contentType.replace('LOCKUP_CONTENT_TYPE_', '');
    this.on_tap_endpoint = new NavigationEndpoint(data.rendererContext.commandContext.onTap);
  }
}