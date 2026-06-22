import { YTNode } from '../helpers.ts';
import type { RawNode } from '../types/RawResponse.ts';
import RendererContext from './misc/RendererContext.ts';

export default class DownloadListItemView extends YTNode {
  static type = 'DownloadListItemView';

  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}