import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class DismissableDialogContentSection extends YTNode {
  static type = 'DismissableDialogContentSection';

  public title: Text;
  public subtitle: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
  }
}
