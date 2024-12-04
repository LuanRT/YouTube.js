import { Text } from '../misc.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class VideoViewCount extends YTNode {
  static type = 'VideoViewCount';

  public original_view_count: string;
  public short_view_count: Text;
  public extra_short_view_count: Text;
  public view_count: Text;

  constructor(data: RawNode) {
    super();
    this.original_view_count = data.originalViewCount;
    this.short_view_count = new Text(data.shortViewCount);
    this.extra_short_view_count = new Text(data.extraShortViewCount);
    this.view_count = new Text(data.viewCount);
  }
}