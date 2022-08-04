import Author from './Author';

class PlaylistAuthor extends Author {
  constructor(item, badges, thumbs) {
    super(item, badges, thumbs);
    delete this.badges;
    delete this.is_verified;
    delete this.is_verified_artist;
  }
}

export default PlaylistAuthor;