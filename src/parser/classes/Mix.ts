import Playlist from './Playlist.js';

class Mix extends Playlist {
  static type = 'Mix';

  constructor(data: any) {
    super(data);
  }
}

export default Mix;