import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class InfoRow extends YTNode {
  static type = 'InfoRow';
  metadata_text?: String;
  metadata_id?: String;
  info_row_expand_status_key: String;
  title: String;

  constructor(data: RawNode) {
    super();
    if ('defaultMetadata' in data && 'runs' in data.defaultMetadata) {
      const runs = data.defaultMetadata.runs;
      if (runs.length > 0) {
        const run = runs[0];
        this.metadata_text = run?.text;
        if ('navigationEndpoint' in run) {
          if ('watchEndpoint' in run.navigationEndpoint) {
            this.metadata_id = run?.navigationEndpoint?.watchEndpoint?.videoId;
          }
          if ('browseEndpoint' in run.navigationEndpoint) {
            this.metadata_id = run?.navigationEndpoint?.browseEndpoint?.browseId;
          }
        }
      }
    }
    if ('expandedMetadata' in data && 'runs' in data.expandedMetadata) {
      this.metadata_text = data.expandedMetadata.runs.map((run: any) => run.text).join('');
    }
    if (this.metadata_text === undefined) {
      this.metadata_text = data.expandedMetadata?.simpleText || data.defaultMetadata?.simpleText;
    }
    this.info_row_expand_status_key = data.infoRowExpandStatusKey;
    this.title = data.title.simpleText;
  }
}
