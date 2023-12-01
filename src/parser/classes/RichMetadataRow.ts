import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';

export default class RichMetadataRow extends YTNode {
  static type = 'RichMetadataRow';

  contents: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}