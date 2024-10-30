import type { RawNode } from '../index.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Video from './Video.js';

export default class VideoCard extends Video {
  static type = 'VideoCard';

  constructor(data: RawNode) {
    super(data);
    if (Reflect.has(data, 'metadataText')) {
      const metadata = new Text(data.metadataText);
      if (metadata.text) {
        this.short_view_count = new Text({ simpleText: metadata.text.split('·')[0].trim() } as RawNode);
        this.published = new Text({ simpleText: metadata.text.split('·')[1].trim() } as RawNode);
      }
    }
    if (Reflect.has(data, 'bylineText')) {
      this.author = new Author(data.bylineText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
    }
  }
}