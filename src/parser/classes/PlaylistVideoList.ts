import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';

export default class PlaylistVideoList extends YTNode {
  static type = 'PlaylistVideoList';

  id: string;
  is_editable: boolean;
  can_reorder: boolean;
  videos: ObservedArray<YTNode>;
  continuation?: string;

  constructor(data: RawNode) {
    super();
    this.id = data.playlistId;
    this.is_editable = data.isEditable;
    this.can_reorder = data.canReorder;
    this.videos = Parser.parseArray(data.contents);

    if (Reflect.has(data, 'continuations')) {
      if (Reflect.has(data.continuations[0], 'nextContinuationData')) {
        this.continuation = data.continuations[0].nextContinuationData.continuation;
      } else if (Reflect.has(data.continuations[0], 'reloadContinuationData')) {
        this.continuation = data.continuations[0].reloadContinuationData.continuation;
      }
    }
  }
}