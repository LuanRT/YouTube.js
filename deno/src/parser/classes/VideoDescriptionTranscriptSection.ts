import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import { Text } from '../misc.ts';
import Button from './Button.ts';

export default class VideoDescriptionTranscriptSection extends YTNode {
  static type = 'VideoDescriptionTranscriptSection';

  section_title: Text;
  sub_header_text: Text;
  primary_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.section_title = new Text(data.sectionTitle);
    this.sub_header_text = new Text(data.subHeaderText);
    this.primary_button = Parser.parseItem(data.primaryButton, Button);
  }
}