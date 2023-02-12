import Parser from '../index.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';

import { YTNode } from '../helpers.js';

class MusicPlaylistShelf extends YTNode {
  static type = 'MusicPlaylistShelf';

  playlist_id: string;
  contents;
  collapsed_item_count: number;
  continuation: string | null;

  constructor(data: any) {
    super();

    this.playlist_id = data.playlistId;
    this.contents = Parser.parseArray<MusicResponsiveListItem>(data.contents, MusicResponsiveListItem);
    this.collapsed_item_count = data.collapsedItemCount;
    this.continuation = data.continuations?.[0]?.nextContinuationData?.continuation || null;
  }
}

export default MusicPlaylistShelf;