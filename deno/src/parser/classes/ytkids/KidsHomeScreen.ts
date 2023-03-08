import Parser from '../../index.ts';
import type AnchoredSection from './AnchoredSection.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class KidsHomeScreen extends YTNode {
  static type = 'kidsHomeScreen';

  anchors;

  constructor(data: RawNode) {
    super();
    this.anchors = Parser.parseArray<AnchoredSection>(data.anchors);
  }
}

export default KidsHomeScreen;