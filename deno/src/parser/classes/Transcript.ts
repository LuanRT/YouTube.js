import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import TranscriptSearchPanel from './TranscriptSearchPanel.ts';

export default class Transcript extends YTNode {
  static type = 'Transcript';

  content: TranscriptSearchPanel | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, TranscriptSearchPanel);
  }
}