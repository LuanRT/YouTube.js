import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class UpdateViewershipAction extends YTNode {
  static type = 'UpdateViewershipAction';

  view_count: Text;
  extra_short_view_count: Text;
  is_live: boolean;

  constructor(data: RawNode) {
    super();
    const view_count_renderer = data.viewCount.videoViewCountRenderer;
    this.view_count = new Text(view_count_renderer.viewCount);
    this.extra_short_view_count = new Text(view_count_renderer.extraShortViewCount);
    this.is_live = view_count_renderer.isLive;
  }
}