import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import { type ObservedArray } from '../helpers.js';
import ToggleFormField from './ToggleFormField.js';

export default class Form extends YTNode {
  static type = 'Form';

  fields: ObservedArray<ToggleFormField>;

  constructor(data: RawNode) {
    super();
    this.fields = Parser.parse(data.fields, true, ToggleFormField);
  }
}