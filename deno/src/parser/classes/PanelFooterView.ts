import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ButtonView from './ButtonView.ts';

export default class PanelFooterView extends YTNode {
  static type = 'PanelFooterView';

  public primary_button: ButtonView | null;
  public secondary_button: ButtonView | null;
  public should_hide_divider: boolean;

  constructor(data: RawNode) {
    super();
    this.primary_button = Parser.parseItem(data.primaryButton, ButtonView);
    this.secondary_button = Parser.parseItem(data.secondaryButton, ButtonView);
    this.should_hide_divider = !!data.shouldHideDivider;
  }
}