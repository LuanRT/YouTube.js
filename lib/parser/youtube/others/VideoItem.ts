'use strict';

import Utils from '../../../utils/Utils';
import Constants from '../../../utils/Constants';

class VideoItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item);
  }

  static parseItem(item) {
    item = (item.richItemRenderer && item.richItemRenderer.content.videoRenderer)
      && item.richItemRenderer.content
      || item;

    if (item.videoRenderer) return {
      id: item.videoRenderer.videoId,
      title: item.videoRenderer.title.runs.map((run) => run.text).join(' '),
      description: item?.videoRenderer?.descriptionSnippet?.runs[0]?.text || 'N/A',
      channel: {
        id: item?.videoRenderer?.shortBylineText?.runs[0]?.navigationEndpoint?.browseEndpoint?.browseId,
        name: item?.videoRenderer?.shortBylineText?.runs[0]?.text || 'N/A',
        url: `${Constants.URLS.YT_BASE}${item?.videoRenderer?.shortBylineText?.runs[0]?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl}`
      },
      metadata: {
        view_count: item?.videoRenderer?.viewCountText?.simpleText || 'N/A',
        short_view_count_text: {
          simple_text: item?.videoRenderer?.shortViewCountText?.simpleText || 'N/A',
          accessibility_label: item?.videoRenderer?.shortViewCountText?.accessibility?.accessibilityData?.label || 'N/A'
        },
        thumbnail: item?.videoRenderer?.thumbnail?.thumbnails.slice(-1)[0] || {},
        moving_thumbnail: item?.videoRenderer?.richThumbnail?.movingThumbnailRenderer?.movingThumbnailDetails?.thumbnails[0] || {},
        published: item?.videoRenderer?.publishedTimeText?.simpleText || 'N/A',
        duration: {
          seconds: Utils.timeToSeconds(item?.videoRenderer?.lengthText?.simpleText || '0'),
          simple_text: item?.videoRenderer?.lengthText?.simpleText || 'N/A',
          accessibility_label: item?.videoRenderer?.lengthText?.accessibility?.accessibilityData?.label || 'N/A'
        },
        badges: item?.videoRenderer?.badges?.map((badge) => badge.metadataBadgeRenderer.label) || [],
        owner_badges: item?.videoRenderer?.ownerBadges?.map((badge) => badge.metadataBadgeRenderer.tooltip) || []
      }
    };
  }
}

export default VideoItem;