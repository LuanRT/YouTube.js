import type Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import VideoViewCount from '../VideoViewCount.js';

export default class UpdateViewershipAction extends YTNode {
  static type = 'UpdateViewershipAction';

  public view_count_node: VideoViewCount | null;

  /**
   * @deprecated Use `view_count_node.view_count` instead.
   */
  get view_count(): Text | undefined {
    return this.view_count_node?.view_count;
  }

  /**
   * @deprecated Use `view_count_node.extra_short_view_count` instead.
   */
  get extra_short_view_count(): Text | undefined {
    return this.view_count_node?.extra_short_view_count;
  }

  /**
   * @deprecated Use `view_count_node.short_view_count` instead.
   */
  get short_view_count(): Text | undefined {
    return this.view_count_node?.short_view_count;
  }

  /**
   * @deprecated Use `view_count_node.original_view_count` instead.
   */
  get original_view_count(): number | undefined {
    return this.view_count_node?.original_view_count;
  }

  /**
   * @deprecated Use `view_count_node.unlabeled_view_count_value` instead.
   */
  get unlabeled_view_count_value(): Text | undefined {
    return this.view_count_node?.unlabeled_view_count_value;
  }

  /**
   * @deprecated Use `view_count_node.is_live` instead.
   */
  get is_live(): boolean | undefined {
    return this.view_count_node?.is_live;
  }

  constructor(data: RawNode) {
    super();
    this.view_count_node = Parser.parseItem(data.viewCount, VideoViewCount);
  }
}