import { type ObservedArray, YTNode } from '../helpers.ts';
import { Parser } from '../index.ts';
import type { RawNode } from '../types/index.ts';

export default class CompositeVideoPrimaryInfo extends YTNode {
  static type = 'CompositeVideoPrimaryInfo';

  public composite_source_video_primary_info_renderers: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.composite_source_video_primary_info_renderers = Parser.parseArray(data.compositeSourceVideoPrimaryInfoRenderers);
  }
}
