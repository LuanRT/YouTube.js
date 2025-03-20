import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ThumbnailView from './ThumbnailView.ts';
import CollectionThumbnailView from './CollectionThumbnailView.ts';
import LockupMetadataView from './LockupMetadataView.ts';
import RendererContext from './misc/RendererContext.ts';

export default class LockupView extends YTNode {
  static type = 'LockupView';

  public content_image: CollectionThumbnailView | ThumbnailView | null;
  public metadata: LockupMetadataView | null;
  public content_id: string;
  public content_type: 'UNSPECIFIED' | 'VIDEO' | 'PLAYLIST' | 'SHORT' | 'CHANNEL' | 'ALBUM' | 'PRODUCT' | 'GAME' | 'CLIP' | 'PODCAST' | 'SOURCE' | 'SHOPPING_COLLECTION' | 'MOVIE';
  public renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();
    this.content_image = Parser.parseItem(data.contentImage, [ CollectionThumbnailView, ThumbnailView ]);
    this.metadata = Parser.parseItem(data.metadata, LockupMetadataView);
    this.content_id = data.contentId;
    this.content_type = data.contentType.replace('LOCKUP_CONTENT_TYPE_', '');
    this.renderer_context = new RendererContext(data.rendererContext);
  }
}