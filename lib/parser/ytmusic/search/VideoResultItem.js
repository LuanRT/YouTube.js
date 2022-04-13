'use strict';

class VideoResultItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item); 
  }
  
  static parseItem(item) {
    const list_item = item.musicResponsiveListItemRenderer;
    if (list_item.playlistItemData) return {
      id: list_item.playlistItemData.videoId,
      title: list_item.flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.text,
      author: list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs[2]?.text,
      views: list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs[4]?.text,
      duration: list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs
      .find((run) => /^\d+$/.test(run.text.replace(/:/g, ''))).text,
      thumbnails: list_item?.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails,
    };
  }
}

module.exports = VideoResultItem;