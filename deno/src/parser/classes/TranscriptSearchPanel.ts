import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Parser from '../index.ts';
import TranscriptFooter from './TranscriptFooter.ts';
import TranscriptSearchBox from './TranscriptSearchBox.ts';
import TranscriptSegmentList from './TranscriptSegmentList.ts';

export default class TranscriptSearchPanel extends YTNode {
  static type = 'TranscriptSearchPanel';

  header: TranscriptSearchBox | null;
  body: TranscriptSegmentList | null;
  footer: TranscriptFooter | null;
  target_id: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, TranscriptSearchBox);
    this.body = Parser.parseItem(data.body, TranscriptSegmentList);
    this.footer = Parser.parseItem(data.footer, TranscriptFooter);
    this.target_id = data.targetId;
  }
}