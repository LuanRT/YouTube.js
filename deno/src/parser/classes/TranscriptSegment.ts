import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Text } from '../misc.ts';

export default class TranscriptSegment extends YTNode {
  static type = 'TranscriptSegment';

  start_ms: string;
  end_ms: string;
  snippet: Text;
  start_time_text: Text;
  target_id: string;

  constructor(data: RawNode) {
    super();
    this.start_ms = data.startMs;
    this.end_ms = data.endMs;
    this.snippet = new Text(data.snippet);
    this.start_time_text = new Text(data.startTimeText);
    this.target_id = data.targetId;
  }
}