import Playlist from './Playlist.ts';

class CompactMix extends Playlist {
  static type = 'CompactMix';

  constructor(data: any) {
    super(data);
  }
}

export default CompactMix;