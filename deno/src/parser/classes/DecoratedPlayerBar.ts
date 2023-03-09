import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import type Button from './Button.ts';
import type MultiMarkersPlayerBar from './MultiMarkersPlayerBar.ts';
import type { RawNode } from '../index.ts';

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