'use strict';

class PlaylistResultItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item));
  }

  static parseItem(item) {
    const list_item = item.musicResponsiveListItemRenderer;
    const watch_playlist_endpoint = list_item?.overlay?.musicItemThumbnailOverlayRenderer
      ?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchPlaylistEndpoint;

    return {
      id: watch_playlist_endpoint?.playlistId,
      title: list_item.flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.text,
      author: list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs[2]?.text,
      channel_id: list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs[2]?.navigationEndpoint?.browseEndpoint.browseId || '0',
      total_items: parseInt(list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs[4]?.text.match(/\d+/g))
    };
  }
}

module.exports = PlaylistResultItem;