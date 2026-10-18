import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import type { RawNode } from '../types/index.js';

export default class CompositeVideoPrimaryInfo extends YTNode {
  static type = 'CompositeVideoPrimaryInfo';

  public composite_source_video_primary_info_renderers: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.composite_source_video_primary_info_renderers = Parser.parseArray(data.compositeSourceVideoPrimaryInfoRenderers);
  }
}
