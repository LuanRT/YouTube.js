import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, YTNodes, type RawNode } from '../index.js';

export default class FormPopup extends YTNode {
  static type = 'FormPopup';

  title: Text;
  form: YTNodes.Form | null;
  buttons: ObservedArray<YTNodes.Button> | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.form = Parser.parseItem(data.form, YTNodes.Form);
    this.buttons = Parser.parse(data.buttons, true, YTNodes.Button);
  }
}
