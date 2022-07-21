import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class ChannelMetadata extends YTNode {
  static type = 'ChannelMetadata';

  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description;
    this.url = data.channelUrl;
    this.rss_urls = data.rssUrl;
    this.vanity_channel_url = data.vanityChannelUrl;
    this.external_id = data.externalId;
    this.is_family_safe = data.isFamilySafe;
    this.keywords = data.keywords;
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.available_countries = data.availableCountryCodes;
    this.android_deep_link = data.androidDeepLink;
    this.android_appindexing_link = data.androidAppindexingLink;
    this.ios_appindexing_link = data.iosAppindexingLink;
  }
}

export default ChannelMetadata;