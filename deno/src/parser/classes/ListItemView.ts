import type { ObservedArray } from '../helpers.ts';
import type { RawNode } from '../types/RawResponse.ts';
import { YTNode } from '../helpers.ts';
import { Parser } from '../index.ts';

import AvatarView from './AvatarView.ts';
import RendererContext from './misc/RendererContext.ts';
import SubscribeButtonView from './SubscribeButtonView.ts';
import Text from './misc/Text.ts';

export default class ListItemView extends YTNode {
  static type = 'ListItemView';

  public title?: Text;
  public subtitle?: Text;
  public leading_accessory: AvatarView | null;
  public renderer_context?: RendererContext;
  public trailing_buttons: ObservedArray<SubscribeButtonView>;

  constructor(data: RawNode) {
    super();
    if ('title' in data) {
      this.title = Text.fromAttributed(data.title);
    }

    if ('subtitle' in data) {
      this.subtitle = Text.fromAttributed(data.subtitle);
    }

    this.leading_accessory = Parser.parseItem(data.leadingAccessory, AvatarView);

    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }

    this.trailing_buttons = Parser.parseArray(data.trailingButtons?.buttons, SubscribeButtonView);
  }
}