'use strict';

class VideoResultItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item); 
  }
  
  static parseItem(item) {
    const list_item = item.musicResponsiveListItemRenderer;
    if (list_item.playlistItemData) {
      let authors = list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs;
      // Remove parts of array that just includes information that the item is a video
      authors.splice(0,2);
      // Remove parts of array that contains data like number of views and duration
      const meta = authors.splice(authors.length - 4, 4);
      // Keep only even parts of array, the odd ones are just a delimiter between authors (&)
      authors = authors.filter((author, index) => !(index % 2));
      return {
        id: list_item.playlistItemData.videoId,
        title: list_item.flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.text,
        author: authors.map((author) => author.text),
        views: meta[1]?.text,
        duration: meta[3]?.text,
        thumbnails: list_item?.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails,
      };
    }
  }
}

module.exports = VideoResultItem;