import Playlist from './Playlist.js';

class CompactPlaylist extends Playlist {
  static type = 'CompactPlaylist';

  constructor(data: any) {
    super(data);
  }
}

export default CompactPlaylist;