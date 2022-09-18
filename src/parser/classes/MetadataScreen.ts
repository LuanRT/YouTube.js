import Parser from '..';
import { YTNode } from '../helpers';

class MetadataScreen extends YTNode {
  static type = 'MetadataScreen';

  section_list;

  constructor (data: any) {
    super();
    this.section_list = Parser.parseItem(data);
  }
}

export default MetadataScreen;