import Parser from '../index';
import { YTNode } from '../helpers';
import RichMetadataRow from './RichMetadataRow';

class MetadataRowContainer extends YTNode {
  static type = 'MetadataRowContainer';
  rows;
  collapsed_item_count: number; // TODO: validate this assumption

  constructor(data: any) {
    super();
    this.rows = Parser.parseArray<RichMetadataRow>(data.rows);
    this.collapsed_item_count = data.collapsedItemCount;
  }
}

export default MetadataRowContainer;