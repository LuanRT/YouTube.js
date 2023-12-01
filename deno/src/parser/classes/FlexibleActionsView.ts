import { type ObservedArray, YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ButtonView from './ButtonView.ts';

export type ActionRow = {
  actions: ObservedArray<ButtonView>;
};

export default class FlexibleActionsView extends YTNode {
  static type = 'FlexibleActionsView';

  actions_rows: ActionRow[];
  style: string;

  constructor(data: RawNode) {
    super();
    this.actions_rows = data.actionsRows.map((row: RawNode) => ({
      actions: Parser.parseArray(row.actions, ButtonView)
    }));
    this.style = data.style;
  }
}