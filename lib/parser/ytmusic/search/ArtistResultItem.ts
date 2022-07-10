'use strict';

class ArtistResultItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item));
  }

  static parseItem(item) {
    const list_item = item.musicResponsiveListItemRenderer;
    return {
      id: list_item.navigationEndpoint.browseEndpoint.browseId,
      name: list_item.flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.text,
      subscribers: list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs[2]?.text,
      thumbnails: list_item?.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
    };
  }
}

export default ArtistResultItem;