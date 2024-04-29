import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ChipView from './ChipView.js';

export default class ChipBarView extends YTNode {
  static type = 'ChipBarView';

  chips: ObservedArray<ChipView> | null;

  constructor(data: RawNode) {
    super();
    this.chips = Parser.parseArray(data.chips, ChipView);
  }
}