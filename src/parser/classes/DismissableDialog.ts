import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import DismissableDialogContentSection from './DismissableDialogContentSection.js';

export default class DismissableDialog extends YTNode {
  static type = 'DismissableDialog';

  public title: string;
  public sections: ObservedArray<DismissableDialogContentSection>;
  public metadata: YTNode | null;
  public display_style: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.sections = Parser.parseArray(data.sections, DismissableDialogContentSection);
    this.metadata = Parser.parseItem(data.metadata);
    this.display_style = data.displayStyle;
  }
}
