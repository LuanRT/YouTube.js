import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import { Text } from '../misc.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class InfoRow extends YTNode {
  static type = 'InfoRow';
  metadata_text?: Text;
  metadata_endpoint?: NavigationEndpoint;
  info_row_expand_status_key: String;
  title: Text;

  constructor(data: RawNode) {
    super();
    if ('defaultMetadata' in data && 'runs' in data.defaultMetadata) {
      const runs = data.defaultMetadata.runs;
      if (runs.length > 0) {
        const run = runs[0];
        this.metadata_text = run?.text;
        if ('navigationEndpoint' in run) {
          this.metadata_endpoint = Parser.parseItem({ navigationEndpoint: run.navigationEndpoint }, NavigationEndpoint) || undefined;
        }
      }
    }
    if ('expandedMetadata' in data && 'runs' in data.expandedMetadata) {
      this.metadata_text = new Text(data.expandedMetadata);
    }
    if (this.metadata_text === undefined) {
      this.metadata_text = data.expandedMetadata?.simpleText
        ? new Text(data.expandedMetadata)
        : data.defaultMetadata?.simpleText
          ? new Text(data.defaultMetadata)
          : undefined;
    }
    this.info_row_expand_status_key = data.infoRowExpandStatusKey;
    this.title = new Text(data.title);
  }
}
