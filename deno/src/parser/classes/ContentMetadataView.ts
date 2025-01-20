import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Text } from '../misc.ts';
import { Parser } from '../index.ts';
import AvatarStackView from './AvatarStackView.ts';

export type MetadataRow = {
  metadata_parts?: {
    text: Text | null;
    avatar_stack: AvatarStackView | null;
    enable_truncation?: boolean;
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
        text: part.text ? Text.fromAttributed(part.text) : null,
        avatar_stack: Parser.parseItem(part.avatarStack, AvatarStackView),
        enable_truncation: data.enableTruncation
      }))
    }));
    this.delimiter = data.delimiter;
  }
}