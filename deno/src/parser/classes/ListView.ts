import type { ObservedArray } from '../helpers.ts';
import type { RawNode } from '../types/RawResponse.ts';
import { YTNode } from '../helpers.ts';
import { Parser } from '../index.ts';

import ListItemView from './ListItemView.ts';
import DownloadListItemView from './DownloadListItemView.ts';
import RendererContext from './misc/RendererContext.ts';

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