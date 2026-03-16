import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import { Text } from '../misc.ts';

export default class VideoSummaryParagraphView extends YTNode {
  static type = 'VideoSummaryParagraphView';

  public text: Text;

  constructor(data: RawNode) {
    super();
    this.text = Text.fromAttributed(data.text);
  }
}