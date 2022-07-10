'use strict';

import Utils from '../../../utils/Utils';

class PlaylistItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item.id);
  }

  static parseItem(item) {
    const item_renderer = item.musicResponsiveListItemRenderer;
    const fixed_columns = item_renderer.fixedColumns;
    const flex_columns = item_renderer.flexColumns;

    return {
      id: item_renderer.playlistItemData && item_renderer.playlistItemData.videoId,
      title: flex_columns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text,
      author: flex_columns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text,
      duration: {
        seconds: Utils.timeToSeconds(fixed_columns[0].musicResponsiveListItemFixedColumnRenderer.text.runs[0].text || '0'),
        simple_text: fixed_columns[0].musicResponsiveListItemFixedColumnRenderer.text.runs[0].text
      },
      thumbnails: item_renderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
    };
  }
}

export default PlaylistItem;