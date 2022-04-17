'use strict';

const SongResultItem = require('./SongResultItem');
const VideoResultItem = require('./VideoResultItem');
const AlbumResultItem = require('./AlbumResultItem');
const ArtistResultItem = require('./ArtistResultItem');
const PlaylistResultItem = require('./PlaylistResultItem');

class TopResultItem {
  static parse(data) {
    return data.map((item) => {
      const list_item = item.musicResponsiveListItemRenderer;

      const runs = list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs;
      const type = runs[0].text.toLowerCase();

      const parsed_item = ({
        playlist: () => PlaylistResultItem.parseItem(item),
        song: () => SongResultItem.parseItem(item),
        video: () => VideoResultItem.parseItem(item),
        artist: () => ArtistResultItem.parseItem(item),
        album: () => AlbumResultItem.parseItem(item),
        single: () => AlbumResultItem.parseItem(item)
      }[type])();

      parsed_item && (parsed_item.type = type);

      return parsed_item;
    }).filter((item) => item);
  }
}

module.exports = TopResultItem;