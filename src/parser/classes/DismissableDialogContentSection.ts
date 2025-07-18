import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

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
