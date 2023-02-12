import Parser from '../index.js';
import { YTNode } from '../helpers.js';

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