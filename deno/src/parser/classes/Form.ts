import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import { type ObservedArray } from '../helpers.ts';
import ToggleFormField from './ToggleFormField.ts';

export default class Form extends YTNode {
  static type = 'Form';

  fields: ObservedArray<ToggleFormField>;

  constructor(data: RawNode) {
    super();
    this.fields = Parser.parseArray(data.fields, ToggleFormField);
  }
}