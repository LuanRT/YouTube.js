import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class MetadataScreen extends YTNode {
  static type = 'MetadataScreen';

  section_list: YTNode;

  constructor (data: RawNode) {
    super();
    this.section_list = Parser.parseItem(data);
  }
}