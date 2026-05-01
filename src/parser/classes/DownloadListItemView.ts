import type { RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

import NavigationEndpoint from './NavigationEndpoint.js';
import RendererContext from './misc/RendererContext.js';

export default class DownloadListItemView extends YTNode {
  static type = 'DownloadListItemView';

  public renderer_context: RendererContext;
  public endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.renderer_context = new RendererContext(data.rendererContext);
    this.endpoint = new NavigationEndpoint(data.rendererContext.commandContext.onTap.innertubeCommand);
  }
}
