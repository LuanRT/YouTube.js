import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ButtonView from './ButtonView.js';
import ToggleButtonView from './ToggleButtonView.js';
import SubscribeButtonView from './SubscribeButtonView.js';

export type ActionRow = {
  actions: ObservedArray<ButtonView | ToggleButtonView | SubscribeButtonView>;
};

export default class FlexibleActionsView extends YTNode {
  static type = 'FlexibleActionsView';

  actions_rows: ActionRow[];
  style: string;

  constructor(data: RawNode) {
    super();
    this.actions_rows = data.actionsRows.map((row: RawNode) => ({
      actions: Parser.parseArray(row.actions, [ ButtonView, ToggleButtonView, SubscribeButtonView ])
    }));
    this.style = data.style;
  }
}
