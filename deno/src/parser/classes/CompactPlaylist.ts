import Playlist from './Playlist.ts';

class CompactPlaylist extends Playlist {
  static type = 'CompactPlaylist';

  constructor(data: any) {
    super(data);
  }
}

export default CompactPlaylist;