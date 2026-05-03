import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/RawResponse.js';
import RendererContext from './misc/RendererContext.js';

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