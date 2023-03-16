import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import Button from './Button.ts';
import MultiMarkersPlayerBar from './MultiMarkersPlayerBar.ts';
import type { RawNode } from '../index.ts';

class DecoratedPlayerBar extends YTNode {
  static type = 'DecoratedPlayerBar';

  player_bar: MultiMarkersPlayerBar | null;
  player_bar_action_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.player_bar = Parser.parseItem(data.playerBar, MultiMarkersPlayerBar);
    this.player_bar_action_button = Parser.parseItem(data.playerBarActionButton, Button);
  }
}

export default DecoratedPlayerBar;