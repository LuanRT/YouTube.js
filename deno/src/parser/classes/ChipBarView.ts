import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ChipView from './ChipView.ts';

export default class ChipBarView extends YTNode {
  static type = 'ChipBarView';

  chips: ObservedArray<ChipView>;

  constructor(data: RawNode) {
    super();
    this.chips = Parser.parseArray(data.chips, ChipView);
  }
}