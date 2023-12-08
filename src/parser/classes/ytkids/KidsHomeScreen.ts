import { Parser } from '../../index.js';
import AnchoredSection from './AnchoredSection.js';
import { type ObservedArray, YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class KidsHomeScreen extends YTNode {
  static type = 'kidsHomeScreen';

  anchors: ObservedArray<AnchoredSection>;

  constructor(data: RawNode) {
    super();
    this.anchors = Parser.parseArray(data.anchors, AnchoredSection);
  }
}