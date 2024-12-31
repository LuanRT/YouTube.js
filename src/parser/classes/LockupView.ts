import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import CollectionThumbnailView from './CollectionThumbnailView.js';
import LockupMetadataView from './LockupMetadataView.js';
import RendererContext from './misc/RendererContext.js';

export default class LockupView extends YTNode {
  static type = 'LockupView';

  public content_image: CollectionThumbnailView | null;
  public metadata: LockupMetadataView | null;
  public content_id: string;
  public content_type: 'VIDEO' | 'MOVIE' | 'CHANNEL' | 'CLIP' | 'SOURCE' | 'PLAYLIST' | 'ALBUM' | 'PODCAST' | 'SHOPPING_COLLECTION' | 'SHORT' | 'GAME' | 'PRODUCT';
  public renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();
    this.content_image = Parser.parseItem(data.contentImage, CollectionThumbnailView);
    this.metadata = Parser.parseItem(data.metadata, LockupMetadataView);
    this.content_id = data.contentId;
    this.content_type = data.contentType.replace('LOCKUP_CONTENT_TYPE_', '');
    this.renderer_context = new RendererContext(data.rendererContext);
  }
}