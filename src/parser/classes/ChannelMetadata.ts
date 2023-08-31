import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ChannelMetadata extends YTNode {
  static type = 'ChannelMetadata';

  title: string;
  description: string;
  url: string;
  rss_url: string;
  vanity_channel_url: string;
  external_id: string;
  is_family_safe: boolean;
  keywords: string[];
  avatar: Thumbnail[];
  music_artist_name?: string;
  available_countries: string[];
  android_deep_link: string;
  android_appindexing_link: string;
  ios_appindexing_link: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.description = data.description;
    this.url = data.channelUrl;
    this.rss_url = data.rssUrl;
    this.vanity_channel_url = data.vanityChannelUrl;
    this.external_id = data.externalId;
    this.is_family_safe = data.isFamilySafe;
    this.keywords = data.keywords;
    this.avatar = Thumbnail.fromResponse(data.avatar);
    // Can be an empty string sometimes, so we need the extra length check
    this.music_artist_name = typeof data.musicArtistName === 'string' && data.musicArtistName.length > 0 ? data.musicArtistName : undefined;
    this.available_countries = data.availableCountryCodes;
    this.android_deep_link = data.androidDeepLink;
    this.android_appindexing_link = data.androidAppindexingLink;
    this.ios_appindexing_link = data.iosAppindexingLink;
  }
}