import Text from './misc/Text.ts';

import { YTNode } from '../helpers.ts';

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