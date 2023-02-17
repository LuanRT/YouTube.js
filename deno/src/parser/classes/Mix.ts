import Playlist from './Playlist.ts';

class Mix extends Playlist {
  static type = 'Mix';

  constructor(data: any) {
    super(data);
  }
}

export default Mix;