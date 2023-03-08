import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class UpdateViewershipAction extends YTNode {
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

export default UpdateViewershipAction;