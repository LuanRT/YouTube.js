'use strict';

class SongResultItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item);
  }

  static parseItem(item) {
    const list_item = item.musicResponsiveListItemRenderer;
    if (list_item.playlistItemData) {
      let artists = list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs;
      // Remove parts of array that just includes information that the item is a song
      artists.splice(0, 2);
      // Remove parts of array that contains data like album and duration
      const meta = artists.splice(artists.length - 4, 4);
      // Keep only even parts of array, the odd ones are just a delimiter between artists (&)
      artists = artists.filter((artist, index) => !(index % 2));
      return {
        id: list_item.playlistItemData.videoId,
        title: list_item.flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.text,
        artist: artists.map((artist) => artist.text),
        album: meta[1]?.text,
        duration: meta[3]?.text,
        thumbnails: list_item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
      };
    }
  }
}

export default SongResultItem;