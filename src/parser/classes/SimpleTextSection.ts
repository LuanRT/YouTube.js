import Text from './misc/Text';

import { YTNode } from '../helpers';

class SimpleTextSection extends YTNode {
  static type = 'SimpleTextSection';

  lines: Text[];
  style: string;

  constructor(data: any) {
    super();
    this.lines = data.lines.map((line: any) => new Text(line));
    this.style = data.layoutStyle;
  }
}

export default SimpleTextSection;