import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';

export default class PlaylistVideoList extends YTNode {
  static type = 'PlaylistVideoList';

  id: string;
  is_editable: boolean;
  can_reorder: boolean;
  videos: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.id = data.playlistId;
    this.is_editable = data.isEditable;
    this.can_reorder = data.canReorder;
    this.videos = Parser.parseArray(data.contents);
  }
}