import { type ObservedArray, YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import MusicResponsiveListItem from './MusicResponsiveListItem.ts';
import ContinuationItem from './ContinuationItem.ts';

export default class MusicPlaylistShelf extends YTNode {
  static type = 'MusicPlaylistShelf';

  public playlist_id: string;
  public contents: ObservedArray<MusicResponsiveListItem | ContinuationItem>;
  public collapsed_item_count: number;
  public continuation: string | null;

  constructor(data: RawNode) {
    super();
    this.playlist_id = data.playlistId;
    this.contents = Parser.parseArray(data.contents, [ MusicResponsiveListItem, ContinuationItem ]);
    this.collapsed_item_count = data.collapsedItemCount;
    this.continuation = data.continuations?.[0]?.nextContinuationData?.continuation || null;
  }
}