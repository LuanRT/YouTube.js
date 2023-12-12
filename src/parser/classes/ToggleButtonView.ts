import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ButtonView from './ButtonView.js';

export default class ToggleButtonView extends YTNode {
  static type = 'ToggleButtonView';

  default_button: ButtonView | null;
  toggled_button: ButtonView | null;
  identifier?: string;
  is_toggling_disabled: boolean;

  constructor(data: RawNode) {
    super();
    this.default_button = Parser.parseItem(data.defaultButtonViewModel, ButtonView);
    this.toggled_button = Parser.parseItem(data.toggledButtonViewModel, ButtonView);
    this.identifier = data.identifier;
    this.is_toggling_disabled = data.isTogglingDisabled;
  }
}