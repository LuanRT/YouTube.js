import { Text } from '../misc.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class VideoViewCount extends YTNode {
  static type = 'VideoViewCount';

  public original_view_count?: number;
  public unlabeled_view_count_value?: Text;
  public short_view_count?: Text;
  public extra_short_view_count?: Text;
  public view_count?: Text;
  public is_live: boolean;

  constructor(data: RawNode) {
    super();
    if ('originalViewCount' in data) {
      this.original_view_count = parseInt(data.originalViewCount);
    }

    if ('unlabeledViewCountValue' in data) {
      this.unlabeled_view_count_value = new Text(data.unlabeledViewCountValue);
    }

    if ('shortViewCount' in data) {
      this.short_view_count = new Text(data.shortViewCount);
    }

    if ('extraShortViewCount' in data) {
      this.extra_short_view_count = new Text(data.extraShortViewCount);
    }

    if ('viewCount' in data) {
      this.view_count = new Text(data.viewCount);
    }

    this.is_live = !!data.isLive;
  }
}