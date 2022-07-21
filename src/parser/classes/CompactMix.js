import Playlist from './Playlist';

class CompactMix extends Playlist {
  static type = 'CompactMix';

  constructor(data) {
    super(data);
  }
}

export default CompactMix;