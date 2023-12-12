import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ToggleButtonView from './ToggleButtonView.js';

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