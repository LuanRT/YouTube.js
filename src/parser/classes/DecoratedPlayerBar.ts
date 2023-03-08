import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import type Button from './Button.js';
import type MultiMarkersPlayerBar from './MultiMarkersPlayerBar.js';
import type { RawNode } from '../index.js';

class DecoratedPlayerBar extends YTNode {
  static type = 'DecoratedPlayerBar';

  player_bar: MultiMarkersPlayerBar | null;
  player_bar_action_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.player_bar = Parser.parseItem<MultiMarkersPlayerBar>(data.playerBar);
    this.player_bar_action_button = Parser.parseItem<Button>(data.playerBarActionButton);
  }
}

export default DecoratedPlayerBar;