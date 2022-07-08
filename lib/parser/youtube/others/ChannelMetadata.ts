'use strict';

class ChannelMetadata {
  static parse(data) {
    return {
      title: data.channelMetadataRenderer.title,
      description: data.channelMetadataRenderer.description,
      metadata: {
        url: data.channelMetadataRenderer?.channelUrl,
        rss_urls: data.channelMetadataRenderer?.rssUrl,
        vanity_channel_url: data.channelMetadataRenderer?.vanityChannelUrl,
        external_id: data.channelMetadataRenderer?.externalId,
        is_family_safe: data.channelMetadataRenderer?.isFamilySafe,
        keywords: data.channelMetadataRenderer?.keywords
      }
    };
  }
}

module.exports = ChannelMetadata;