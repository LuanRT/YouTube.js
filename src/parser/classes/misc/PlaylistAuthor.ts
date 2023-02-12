import Author from './Author.js';

class PlaylistAuthor extends Author {
  constructor(item: any, badges?: any, thumbs?: any) {
    super(item, badges, thumbs);
    delete this.badges;
    delete this.is_verified;
    delete this.is_verified_artist;
  }
}

export default PlaylistAuthor;