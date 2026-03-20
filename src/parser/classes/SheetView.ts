import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import RendererContext from './misc/RendererContext.js';

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