import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class SimpleTextSection extends YTNode {
  static type = 'SimpleTextSection';

  lines: Text[];
  style: string;

  constructor(data: RawNode) {
    super();
    this.lines = data.lines.map((line: RawNode) => new Text(line));
    this.style = data.layoutStyle;
  }
}