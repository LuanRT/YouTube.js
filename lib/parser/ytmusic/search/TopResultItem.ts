'use strict';

import SongResultItem from './SongResultItem';
import VideoResultItem from './VideoResultItem';
import AlbumResultItem from './AlbumResultItem';
import ArtistResultItem from './ArtistResultItem';
import PlaylistResultItem from './PlaylistResultItem';

class TopResultItem {
  static parse(data) {
    return data.map((item) => {
      const list_item = item.musicResponsiveListItemRenderer;

      const runs = list_item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs;
      const type = runs[0].text.toLowerCase();

      const parsed_item = (() => {
        switch (type) {
          case 'playlist':
            return PlaylistResultItem.parseItem(item);
          case 'song':
            return SongResultItem.parseItem(item);
          case 'video':
            return VideoResultItem.parseItem(item);
          case 'artist':
            return ArtistResultItem.parseItem(item);
          case 'album':
            return AlbumResultItem.parseItem(item);
          case 'single':
            return AlbumResultItem.parseItem(item);
          default:
            return undefined;
        }
      })();

      if (parsed_item) {
        parsed_item.type = type;
      }

      return parsed_item;
    }).filter((item) => item);
  }
}

export default TopResultItem;