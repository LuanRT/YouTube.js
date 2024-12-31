import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import RendererContext from './misc/RendererContext.js';

export default class ButtonCardView extends YTNode {
  static type = 'ButtonCardView';

  public title: string;
  public icon_name: string;
  public renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.icon_name = data.image.sources[0].clientResource.imageName;
    this.renderer_context = new RendererContext(data.rendererContext);
  }
}
