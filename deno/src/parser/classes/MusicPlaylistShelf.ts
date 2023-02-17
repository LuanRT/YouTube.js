import Parser from '../index.ts';
import MusicResponsiveListItem from './MusicResponsiveListItem.ts';

import { YTNode } from '../helpers.ts';

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