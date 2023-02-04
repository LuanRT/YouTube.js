import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';

class ChannelMetadata extends YTNode {
  static type = 'ChannelMetadata';

  title: string;
  description: string;
  url: string;
  rss_urls: any; // Array?
  vanity_channel_url: string;
  external_id: string;
  is_family_safe: boolean;
  keywords: string[];
  avatar: Thumbnail[];
  available_countries: string[];
  android_deep_link: string;
  android_appindexing_link: string;
  ios_appindexing_link: string;

  constructor(data: any) {
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