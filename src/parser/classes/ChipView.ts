import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ChipView extends YTNode {
  static type = 'ChipView';

  public accessibility_hint?: string;
  public accessibility_label?: string;
  public text?: string;
  public trailing_text?: string;
  public display_type?: 'CHIP_VIEW_MODEL_DISPLAY_TYPE_UNSPECIFIED'
    | 'CHIP_VIEW_MODEL_DISPLAY_TYPE_DROP_DOWN'
    | 'CHIP_VIEW_MODEL_DISPLAY_TYPE_DROP_DOWN_WITH_CLEAR'
    | 'CHIP_VIEW_MODEL_DISPLAY_TYPE_FILTER'
    | 'CHIP_VIEW_MODEL_DISPLAY_TYPE_NO_ICON'
    | 'CHIP_VIEW_MODEL_DISPLAY_TYPE_ADJUST'
    | 'CHIP_VIEW_MODEL_DISPLAY_TYPE_CLEAR'
    | 'CHIP_VIEW_MODEL_DISPLAY_TYPE_ADD'
    | 'CHIP_VIEW_MODEL_DISPLAY_TYPE_SPARK';
  public max_text_width?: number;
  public secondary_accessibility_label?: string;
  public original_text?: string;
  public tap_command?: NavigationEndpoint;
  public secondary_tap_command?: NavigationEndpoint;
  public chip_entity_key?: string;
  public selected: boolean;

  public get endpoint(): NavigationEndpoint | undefined {
    return this.tap_command;
  }

  constructor(data: RawNode) {
    super();

    if ('accessibilityHint' in data) {
      this.accessibility_hint = data.accessibilityHint;
    }

    if ('accessibilityLabel' in data) {
      this.accessibility_label = data.accessibilityLabel;
    }

    if ('chipEntityKey' in data) {
      this.chip_entity_key = data.chipEntityKey;
    }

    if ('text' in data) {
      this.text = data.text;
    }

    if ('trailingText' in data) {
      this.trailing_text = data.trailingText;
    }

    if ('displayType' in data) {
      this.display_type = data.displayType;
    }

    if ('maxTextWidth' in data) {
      this.max_text_width = data.maxTextWidth;
    }

    if ('originalText' in data) {
      this.original_text = data.originalText;
    }

    if ('secondaryAccessibilityLabel' in data) {
      this.secondary_accessibility_label = data.secondaryAccessibilityLabel;
    }

    if ('tapCommand' in data) {
      this.tap_command = new NavigationEndpoint(data.tapCommand);
    }

    if ('secondaryTapCommand' in data) {
      this.secondary_tap_command = new NavigationEndpoint(data.secondaryTapCommand);
    }

    this.selected = !!data.selected;
  }
}