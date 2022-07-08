'use strict';

class AlbumResultItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item));
  }

  static parseItem(item) {
    const list_item = item.musicResponsiveListItemRenderer;
    return {
      id: list_item.navigationEndpoint.browseEndpoint.browseId,
      title: list_item.flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.text,
      author: list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs[2]?.text,
      year: list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs
        .find((run) => (/^[12][0-9]{3}$/).test(run.text)).text,
      thumbnails: list_item?.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails,
      playlistId: list_item?.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId
    };
  }
}

module.exports = AlbumResultItem;