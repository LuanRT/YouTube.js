import type { RawNode } from '../index.ts';
import Playlist from './Playlist.ts';

class CompactPlaylist extends Playlist {
  static type = 'CompactPlaylist';

  constructor(data: RawNode) {
    super(data);
  }
}

export default CompactPlaylist;