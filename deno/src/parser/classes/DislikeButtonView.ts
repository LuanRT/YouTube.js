import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ToggleButtonView from './ToggleButtonView.ts';

export default class DislikeButtonView extends YTNode {
  static type = 'DislikeButtonView';

  toggle_button: ToggleButtonView | null;
  dislike_entity_key: string;

  constructor(data: RawNode) {
    super();
    this.toggle_button = Parser.parseItem(data.toggleButtonViewModel, ToggleButtonView);
    this.dislike_entity_key = data.dislikeEntityKey;
  }
}