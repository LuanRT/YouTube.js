'use strict';

import Utils from '../../../utils/Utils';
import Constants from '../../../utils/Constants';

class VideoResultItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item);
  }

  static parseItem(item) {
    const renderer = item.videoRenderer || item.compactVideoRenderer;
    if (renderer) return {
      id: renderer.videoId,
      url: `https://youtu.be/${renderer.videoId}`,
      title: renderer.title.runs[0].text,
      description: renderer?.detailedMetadataSnippets ? renderer?.detailedMetadataSnippets[0].snippetText.runs.map((item) => item.text).join('') : 'N/A',
      channel: {
        id: renderer?.ownerText?.runs[0]?.navigationEndpoint?.browseEndpoint?.browseId,
        name: renderer?.ownerText?.runs[0]?.text,
        url: `${Constants.URLS.YT_BASE}${renderer?.ownerText?.runs[0].navigationEndpoint?.browseEndpoint?.canonicalBaseUrl}`
      },
      metadata: {
        view_count: renderer?.viewCountText?.simpleText || 'N/A',
        short_view_count_text: {
          simple_text: renderer?.shortViewCountText?.simpleText || 'N/A',
          accessibility_label: renderer?.shortViewCountText?.accessibility?.accessibilityData?.label || 'N/A'
        },
        thumbnails: renderer?.thumbnail.thumbnails,
        duration: {
          seconds: Utils.timeToSeconds(renderer?.lengthText?.simpleText || '0'),
          simple_text: renderer?.lengthText?.simpleText || 'N/A',
          accessibility_label: renderer?.lengthText?.accessibility?.accessibilityData?.label || 'N/A'
        },
        published: renderer?.publishedTimeText?.simpleText || 'N/A',
        badges: renderer?.badges?.map((item) => item.metadataBadgeRenderer.label) || [],
        owner_badges: renderer?.ownerBadges?.map((item) => item.metadataBadgeRenderer.tooltip) || []
      }
    };
  }
}

export default VideoResultItem;
