import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import { Text } from '../misc.js';
import Button from './Button.js';

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