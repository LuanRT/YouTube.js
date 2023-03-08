import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class RichMetadataRow extends YTNode {
  static type = 'RichMetadataRow';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}

export default RichMetadataRow;