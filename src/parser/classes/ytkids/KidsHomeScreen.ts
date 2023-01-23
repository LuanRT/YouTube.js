import Parser from '../..';
import type AnchoredSection from './AnchoredSection';
import { YTNode } from '../../helpers';

class KidsHomeScreen extends YTNode {
  static type = 'kidsHomeScreen';

  anchors;

  constructor(data: any) {
    super();
    this.anchors = Parser.parseArray<AnchoredSection>(data.anchors);
  }
}

export default KidsHomeScreen;