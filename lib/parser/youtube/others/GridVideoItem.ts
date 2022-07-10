'use strict';

import Constants from '../../../utils/Constants';

class GridVideoItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item);
  }

  static parseItem(item) {
    return {
      id: item.gridVideoRenderer.videoId,
      title: item?.gridVideoRenderer?.title?.runs?.map((run) => run.text).join(' '),
      channel: {
        id: item?.gridVideoRenderer?.shortBylineText?.runs[0]?.navigationEndpoint?.browseEndpoint?.browseId,
        name: item?.gridVideoRenderer?.shortBylineText?.runs[0]?.text || 'N/A',
        url: `${Constants.URLS.YT_BASE}${item?.gridVideoRenderer?.shortBylineText?.runs[0]?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl}`
      },
      metadata: {
        view_count: item?.gridVideoRenderer?.viewCountText?.simpleText || 'N/A',
        short_view_count_text: {
          simple_text: item?.gridVideoRenderer?.shortViewCountText?.simpleText || 'N/A',
          accessibility_label: item?.gridVideoRenderer?.shortViewCountText?.accessibility?.accessibilityData?.label || 'N/A'
        },
        thumbnail: item?.gridVideoRenderer?.thumbnail?.thumbnails.slice(-1)[0] || [],
        moving_thumbnail: item?.gridVideoRenderer?.richThumbnail?.movingThumbnailRenderer?.movingThumbnailDetails?.thumbnails[0] || {},
        published: item?.gridVideoRenderer?.publishedTimeText?.simpleText || 'N/A',
        badges: item?.gridVideoRenderer?.badges?.map((badge) => badge.metadataBadgeRenderer.label) || [],
        owner_badges: item?.gridVideoRenderer?.ownerBadges?.map((badge) => badge.metadataBadgeRenderer.tooltip) || []
      }
    };
  }
}

export default GridVideoItem;