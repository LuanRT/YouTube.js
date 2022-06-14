const Parser = require('..');
const Thumbnail = require('./Thumbnail');

class ChannelMetadata {
  type = 'ChannelMetadata';

  constructor(item) {
    this.title = item.title;
    this.description = item.description;
    this.url = item.channelUrl;
    this.rss_urls = item.rssUrl;
    this.vanity_channel_url = item.vanityChannelUrl;
    this.external_id = item.externalId;
    this.is_family_safe = item.isFamilySafe;
    this.keywords = item.keywords;
    this.avatar = Thumbnail.fromResponse(item.avatar);
    this.available_countries = item.availableCountryCodes;
    this.android_deep_link = item.androidDeepLink;
    this.android_appindexing_link = item.androidAppindexingLink;
    this.ios_appindexing_link = item.iosAppindexingLink;
  }
}

module.exports = ChannelMetadata;