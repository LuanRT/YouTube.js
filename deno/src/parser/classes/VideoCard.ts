import type { RawNode } from '../index.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Video from './Video.ts';

export default class VideoCard extends Video {
  static type = 'VideoCard';
  
  public metadata_text?: Text;
  public byline_text?: Text;

  constructor(data: RawNode) {
    super(data);
    if (Reflect.has(data, 'metadataText')) {
      this.metadata_text = new Text(data.metadataText);
      if (this.metadata_text.text) {
        this.short_view_count = new Text({ simpleText: this.metadata_text.text.split('·')[0]?.trim() } as RawNode);
        this.published = new Text({ simpleText: this.metadata_text.text.split('·')[1]?.trim() } as RawNode);
      }
    }
    
    if (Reflect.has(data, 'bylineText')) {
      this.author = new Author(data.bylineText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
    }
  }
}