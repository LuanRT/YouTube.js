import { Parser } from '../../index.ts';
import AnchoredSection from './AnchoredSection.ts';
import { type ObservedArray, YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class KidsHomeScreen extends YTNode {
  static type = 'kidsHomeScreen';

  anchors: ObservedArray<AnchoredSection>;

  constructor(data: RawNode) {
    super();
    this.anchors = Parser.parseArray(data.anchors, AnchoredSection);
  }
}