import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class DescriptionPreviewView extends YTNode {
  static type = 'DescriptionPreviewView';

  description: Text;
  max_lines: number;
  truncation_text: Text;
  always_show_truncation_text: boolean;

  constructor(data: RawNode) {
    super();

    this.description = Text.fromAttributed(data.description);
    this.max_lines = parseInt(data.maxLines);
    this.truncation_text = Text.fromAttributed(data.truncationText);
    this.always_show_truncation_text = !!data.alwaysShowTruncationText;
  }
}