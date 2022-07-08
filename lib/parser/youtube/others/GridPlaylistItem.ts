'use strict';

class GridPlaylistItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item);
  }

  static parseItem(item) {
    return {
      id: item?.gridPlaylistRenderer.playlistId,
      title: item?.gridPlaylistRenderer.title?.runs?.map((run) => run.text).join(''),
      metadata: {
        thumbnail: item?.gridPlaylistRenderer.thumbnail?.thumbnails?.slice(-1)[0] || {},
        video_count: item?.gridPlaylistRenderer.videoCountShortText?.simpleText || 'N/A'
      }
    };
  }
}

export default GridPlaylistItem;