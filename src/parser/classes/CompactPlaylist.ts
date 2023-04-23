import type { RawNode } from '../index.js';
import Playlist from './Playlist.js';

class CompactPlaylist extends Playlist {
  static type = 'CompactPlaylist';

  constructor(data: RawNode) {
    super(data);
  }
}

export default CompactPlaylist;