import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import { Text, Thumbnail } from '../misc.js';
import ButtonView from './ButtonView.js';

export default class InterstitialView extends YTNode {
  static type = 'InterstitialView';

  public title: Text;
  public description: Text;
  public icon?: Thumbnail[];
  public primary_button: ButtonView | null;

  constructor(data: RawNode) {
    super();
    this.title = Text.fromAttributed(data.title);
    this.description = Text.fromAttributed(data.description);
    if ('icon' in data) {
      this.icon = Thumbnail.fromResponse(data.icon);
    }
    this.primary_button = Parser.parseItem(data.primaryButton, ButtonView);
  }
}