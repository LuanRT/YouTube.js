import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class Endscreen extends YTNode {
  static type = 'Endscreen';

  elements;
  start_ms: string; // Or number?

  constructor(data: any) {
    super();
    this.elements = Parser.parseArray(data.elements);
    this.start_ms = data.startMs;
  }
}

export default Endscreen;