import Parser from '../../index.ts';
import AnchoredSection from './AnchoredSection.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class KidsHomeScreen extends YTNode {
  static type = 'kidsHomeScreen';

  anchors;

  constructor(data: RawNode) {
    super();
    this.anchors = Parser.parseArray(data.anchors, AnchoredSection);
  }
}

export default KidsHomeScreen;