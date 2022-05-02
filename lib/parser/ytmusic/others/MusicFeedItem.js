'use strict';

class MusicFeedItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item.id); 
  }

  static parseItem(item) {
    const renderer = item.musicTwoRowItemRenderer;

    return {
      id: renderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId,
      title: renderer.title.runs[0].text,
      subtitle: renderer.subtitle.runs.map((run) => run.text).join('').trim(),
      thumbnail: renderer.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails
    }
  }
}

module.exports = MusicFeedItem;