import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import AvatarView from './AvatarView.ts';
import RendererContext from './misc/RendererContext.ts';

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