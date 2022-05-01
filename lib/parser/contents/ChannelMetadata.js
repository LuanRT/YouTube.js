const ResultsParser = require('.');
const Thumbnail = require('./Thumbnail');

class ChannelMetadata {
  type = 'ChannelMetadata';

  constructor(item) {
    this.title = item.title;
    this.description = item.description;
    this.metadata = {
      url: item.url,
      rss_urls: item.rssUrl,
      vanity_channel_url: item.vanityChannelUrl,
      external_id: item.externalId,
      is_family_safe: item.isFamilySafe,
      keywords: item.keywords,
      avatar: Thumbnail.fromResponse(item.avatar),
      available_countries: item.availableCountryCodes,
      android_deep_link: item.androidDeepLink,
      android_appindexing_link: item.androidAppIndexingLink,
      ios_appindexing_link: item.iosAppIndexingLink,
    }
  }
}

module.exports = ChannelMetadata;