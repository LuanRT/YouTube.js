import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import RendererContext from './misc/RendererContext.ts';

export default class SheetView extends YTNode {
  static type = 'SheetView';

  public content: YTNode | null;
  public footer: YTNode | null;
  public header: YTNode | null;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
    this.footer = Parser.parseItem(data.footer);
    this.header = Parser.parseItem(data.header);
    
    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}