import type { ObservedArray } from '../helpers.js';
import type { RawNode } from '../types/RawResponse.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';

import AvatarView from './AvatarView.js';
import RendererContext from './misc/RendererContext.js';
import SubscribeButtonView from './SubscribeButtonView.js';
import Text from './misc/Text.js';

export default class ListItemView extends YTNode {
  static type = 'ListItemView';

  public title?: Text;
  public subtitle?: Text;
  public selection_text?: Text;
  public selection_style?:
    | 'LIST_ITEM_SELECTION_STYLE_UNSPECIFIED'
    | 'LIST_ITEM_SELECTION_STYLE_DEFAULT'
    | 'LIST_ITEM_SELECTION_STYLE_CHECKBOX'
    | 'LIST_ITEM_SELECTION_STYLE_RADIO'
    | 'LIST_ITEM_SELECTION_STYLE_TOGGLE';
  public background_color?: number;
  
  public leading_accessory: AvatarView | null;
  public trailing_button: YTNode | null;
  public trailing_buttons: ObservedArray<SubscribeButtonView>;
  public is_disabled: boolean;
  public is_selected: boolean;
  public has_divider_below: boolean;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    if ('title' in data) {
      this.title = Text.fromAttributed(data.title);
    }

    if ('subtitle' in data) {
      this.subtitle = Text.fromAttributed(data.subtitle);
    }

    if ('selectionText' in data) {
      this.selection_text = Text.fromAttributed(data.selectionText);
    }

    if ('selectionStyle' in data) {
      this.selection_style = data.selectionStyle;
    }

    if ('backgroundColor' in data) {
      this.background_color = parseInt(data.backgroundColor, 16);
    }

    this.leading_accessory = Parser.parseItem(data.leadingAccessory, AvatarView);
    this.trailing_buttons = Parser.parseArray(data.trailingButtons?.buttons, SubscribeButtonView);
    this.trailing_button = Parser.parseItem(data.trailingButton);

    this.is_disabled = !!data.isDisabled;
    this.is_selected = !!data.isSelected;
    this.has_divider_below = !!data.hasDividerBelow;

    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}