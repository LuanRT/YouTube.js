import Parser from '../../index.js';
import AnchoredSection from './AnchoredSection.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

class KidsHomeScreen extends YTNode {
  static type = 'kidsHomeScreen';

  anchors;

  constructor(data: RawNode) {
    super();
    this.anchors = Parser.parseArray(data.anchors, AnchoredSection);
  }
}

export default KidsHomeScreen;