import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Text } from '../misc.js';

export type MetadataRow = {
  metadata_parts?: {
    text: Text;
  }[];
};

export default class ContentMetadataView extends YTNode {
  static type = 'ContentMetadataView';

  metadata_rows: MetadataRow[];
  delimiter: string;

  constructor(data: RawNode) {
    super();
    this.metadata_rows = data.metadataRows.map((row: RawNode) => ({
      metadata_parts: row.metadataParts?.map((part: RawNode) => ({
        text: Text.fromAttributed(part.text)
      }))
    }));
    this.delimiter = data.delimiter;
  }
}