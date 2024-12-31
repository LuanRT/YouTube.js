import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Text } from '../misc.js';
import { Parser } from '../index.js';
import AvatarStackView from './AvatarStackView.js';

export type MetadataRow = {
  metadata_parts?: {
    text: Text;
    avatar_stack: AvatarStackView | null;
  }[];
};

export default class ContentMetadataView extends YTNode {
  static type = 'ContentMetadataView';

  public metadata_rows: MetadataRow[];
  public delimiter: string;

  constructor(data: RawNode) {
    super();
    this.metadata_rows = data.metadataRows.map((row: RawNode) => ({
      metadata_parts: row.metadataParts?.map((part: RawNode) => ({
        text: Text.fromAttributed(part.text || {}),
        avatar_stack: Parser.parseItem(part.avatarStack, AvatarStackView)
      }))
    }));
    this.delimiter = data.delimiter;
  }
}