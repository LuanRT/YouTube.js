import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import { Text } from '../misc.ts';
import TranscriptSectionHeader from './TranscriptSectionHeader.ts';
import TranscriptSegment from './TranscriptSegment.ts';

export default class TranscriptSegmentList extends YTNode {
  static type = 'TranscriptSegmentList';

  initial_segments: ObservedArray<TranscriptSegment | TranscriptSectionHeader>;
  no_result_label: Text;
  retry_label: Text;
  touch_captions_enabled: boolean;

  constructor(data: RawNode) {
    super();
    this.initial_segments = Parser.parseArray(data.initialSegments, [ TranscriptSegment, TranscriptSectionHeader ]);
    this.no_result_label = new Text(data.noResultLabel);
    this.retry_label = new Text(data.retryLabel);
    this.touch_captions_enabled = data.touchCaptionsEnabled;
  }
}