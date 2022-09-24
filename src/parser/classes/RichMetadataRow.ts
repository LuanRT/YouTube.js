import Parser from '../index';
import { YTNode } from '../helpers';

class RichMetadataRow extends YTNode {
  static type = 'RichMetadataRow';

  rows;
  collapsed_item_count: number; // TODO: validate this assumption

  constructor(data: any) {
    super();
    this.rows = Parser.parseArray(data.contents);
    this.collapsed_item_count = data.collapsedItemCount;
  }
}

export default RichMetadataRow;