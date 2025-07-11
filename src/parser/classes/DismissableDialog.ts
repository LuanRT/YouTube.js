import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode, YTNodes } from '../index.js';

export default class DismissableDialog extends YTNode {
  static type = 'DismissableDialog';

  title: string;
  sections: ObservedArray<YTNodes.DismissableDialogContentSection> | null;
  metadata: YTNodes.MusicMultiRowListItem | null;
  display_style: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.sections = Parser.parse(
      data.sections,
      true,
      YTNodes.DismissableDialogContentSection
    );
    this.metadata = Parser.parseItem(
      data.metadata,
      YTNodes.MusicMultiRowListItem
    );
    this.display_style = data.displayStyle;
  }
}
