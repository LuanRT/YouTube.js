import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

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