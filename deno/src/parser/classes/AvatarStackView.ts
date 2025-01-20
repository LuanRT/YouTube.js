import { type ObservedArray, YTNode } from '../helpers.ts';
import type { RawNode } from '../types/index.ts';
import { Parser } from '../index.ts';

import Text from './misc/Text.ts';
import AvatarView from './AvatarView.ts';
import RendererContext from './misc/RendererContext.ts';

export default class AvatarStackView extends YTNode {
  static type = 'AvatarStackView';

  public avatars: ObservedArray<AvatarView>;
  public text?: Text;
  public renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();
    this.avatars = Parser.parseArray(data.avatars, AvatarView);

    if (Reflect.has(data, 'text'))
      this.text = Text.fromAttributed(data.text);
    
    this.renderer_context = new RendererContext(data.rendererContext);
  }
}