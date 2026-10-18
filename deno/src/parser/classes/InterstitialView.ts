import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import { Text, Thumbnail } from '../misc.ts';
import ButtonView from './ButtonView.ts';

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