import type { ObservedArray } from '../helpers.js';
import type { RawNode } from '../types/RawResponse.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';

import ListItemView from './ListItemView.js';
import DownloadListItemView from './DownloadListItemView.js';
import RendererContext from './misc/RendererContext.js';

export default class ListView extends YTNode {
  static type = 'ListView';

  public items: ObservedArray<ListItemView | DownloadListItemView>;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();

    this.items = Parser.parseArray(data.listItems, [ ListItemView, DownloadListItemView ]);

    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}