import Parser from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';

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