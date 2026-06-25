import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import EntityMetadata from './EntityMetadata.js';
import PlaylistVideoList from './PlaylistVideoList.js';

export default class TwoColumn extends YTNode {
  static type = 'TwoColumn';

  left_column: EntityMetadata | null;
  right_column: PlaylistVideoList | null;

  constructor(data: RawNode) {
    super();
    this.left_column = Parser.parseItem(data.leftColumn, EntityMetadata);
    this.right_column = Parser.parseItem(data.rightColumn, PlaylistVideoList);
  }
}