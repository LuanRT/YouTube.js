import { Parser } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';

export default class Endscreen extends YTNode {
  static type = 'Endscreen';

  elements: ObservedArray<YTNode>;
  start_ms: string;

  constructor(data: any) {
    super();
    this.elements = Parser.parseArray(data.elements);
    this.start_ms = data.startMs;
  }
}