import Parser from '../index';
import { YTNode } from '../helpers';

class MusicPlaylistShelf extends YTNode {
  static type = 'MusicPlaylistShelf';

  #continuations;

  playlist_id: string;
  contents;
  collapsed_item_count: string;

  constructor(data: any) {
    super();
    this.playlist_id = data.playlistId;
    this.contents = Parser.parse(data.contents);
    this.collapsed_item_count = data.collapsedItemCount;
    this.#continuations = data.continuations;
  }

  get continuation() {
    return this.#continuations?.[0]?.nextContinuationData;
  }
}

export default MusicPlaylistShelf;