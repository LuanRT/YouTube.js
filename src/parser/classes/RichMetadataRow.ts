import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class RichMetadataRow extends YTNode {
  static type = 'RichMetadataRow';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}

export default RichMetadataRow;