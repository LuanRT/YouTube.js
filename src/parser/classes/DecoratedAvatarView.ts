import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import AvatarView from './AvatarView.js';
import RendererContext from './misc/RendererContext.js';

export default class DecoratedAvatarView extends YTNode {
  static type = 'DecoratedAvatarView';

  public avatar: AvatarView | null;
  public a11y_label: string;
  public renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();
    this.avatar = Parser.parseItem(data.avatar, AvatarView);
    this.a11y_label = data.a11yLabel;
    this.renderer_context = new RendererContext(data.rendererContext);
  }
}