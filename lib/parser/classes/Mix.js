import Playlist from './Playlist';

class Mix extends Playlist {
  static type = 'Mix';
  constructor(data) {
    super(data);
  }
}
export default Mix;
