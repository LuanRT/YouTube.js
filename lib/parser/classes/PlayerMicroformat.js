import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';

import { YTNode } from '../helpers';

class PlayerMicroformat extends YTNode {
  static type = 'PlayerMicroformat';
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.embed = {
      iframe_url: data.embed.iframeUrl,
      flash_url: data.embed.flashUrl,
      flash_secure_url: data.embed.flashSecureUrl,
      width: data.embed.width,
      height: data.embed.height
    };
    this.length_seconds = parseInt(data.lengthSeconds);
    this.channel = {
      id: data.externalChannelId,
      name: data.ownerChannelName,
      url: data.ownerProfileUrl
    };
    this.is_family_safe = !!data.isFamilySafe;
    this.is_unlisted = !!data.isUnlisted;
    this.has_ypc_metadata = !!data.hasYpcMetadata;
    this.view_count = parseInt(data.viewCount);
    this.category = data.category;
    this.publish_date = data.publishDate;
    this.upload_date = data.uploadDate;
    this.available_countries = data.availableCountries;
  }
}
export default PlayerMicroformat;
