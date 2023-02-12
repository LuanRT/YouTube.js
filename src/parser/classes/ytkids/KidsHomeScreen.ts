import Parser from '../../index.js';
import type AnchoredSection from './AnchoredSection.js';
import { YTNode } from '../../helpers.js';

class KidsHomeScreen extends YTNode {
  static type = 'kidsHomeScreen';

  anchors;

  constructor(data: any) {
    super();
    this.anchors = Parser.parseArray<AnchoredSection>(data.anchors);
  }
}

export default KidsHomeScreen;