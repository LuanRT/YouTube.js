import Playlist from './Playlist.js';

class CompactMix extends Playlist {
  static type = 'CompactMix';

  constructor(data: any) {
    super(data);
  }
}

export default CompactMix;