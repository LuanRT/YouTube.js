import { type ObservedArray, YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import RendererContext from './misc/RendererContext.ts';

export default class LinearLayoutView extends YTNode {
  static type = 'LinearLayoutView';

  public items: ObservedArray<YTNode>;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
    if ('rendererContext' in data)
      this.renderer_context = new RendererContext(data.rendererContext);
  }
}