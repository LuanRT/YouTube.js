import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export interface RichTextSegment {
  section_renderer: YTNode | null;
  section_string?: string;
}

export default class RichTextListView extends YTNode {
  static type = 'RichTextListView';

  segments: RichTextSegment[];

  constructor(data: RawNode) {
    super();
    this.segments = (data.segments || []).map((segment: RawNode) => ({
      section_renderer: Parser.parseItem(segment.sectionRenderer),
      section_string: segment.sectionString?.content
    }));
  }
}
