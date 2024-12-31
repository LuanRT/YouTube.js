import { type ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';
import { Parser } from '../index.js';

import Text from './misc/Text.js';
import AvatarView from './AvatarView.js';
import RendererContext from './misc/RendererContext.js';

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