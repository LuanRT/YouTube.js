import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ContentMetadataView from './ContentMetadataView.js';
import Text from './misc/Text.js';

export default class LockupMetadataView extends YTNode {
  static type = 'LockupMetadataView';

  title: Text;
  metadata: ContentMetadataView | null;

  constructor(data: RawNode) {
    super();

    this.title = Text.fromAttributed(data.title);
    this.metadata = Parser.parseItem(data.metadata, ContentMetadataView);
  }
}