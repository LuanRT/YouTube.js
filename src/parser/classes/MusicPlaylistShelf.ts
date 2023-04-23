import { YTNode, type ObservedArray } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';

export default class MusicPlaylistShelf extends YTNode {
  static type = 'MusicPlaylistShelf';

  playlist_id: string;
  contents: ObservedArray<MusicResponsiveListItem>;
  collapsed_item_count: number;
  continuation: string | null;

  constructor(data: RawNode) {
    super();
    this.playlist_id = data.playlistId;
    this.contents = Parser.parseArray(data.contents, MusicResponsiveListItem);
    this.collapsed_item_count = data.collapsedItemCount;
    this.continuation = data.continuations?.[0]?.nextContinuationData?.continuation || null;
  }
}