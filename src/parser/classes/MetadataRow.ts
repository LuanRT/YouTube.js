import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class MetadataRow extends YTNode {
  static type = 'MetadataRow';

  title: Text;
  contents: Text[];

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.contents = data.contents.map((content: RawNode) => new Text(content));
  }
}