import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, YTNodes, type RawNode } from '../index.js';

export default class Form extends YTNode {
  static type = 'Form';

  fields: ObservedArray | null;

  constructor(data: RawNode) {
    super();
    this.fields = Parser.parse(data.fields, true, YTNodes.ToggleFormField);
  }
}