import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import RendererContext from './misc/RendererContext.js';

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