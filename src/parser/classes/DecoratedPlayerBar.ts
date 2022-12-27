import Parser from '..';
import { YTNode } from '../helpers';
import type Button from './Button';
import type MultiMarkersPlayerBar from './MultiMarkersPlayerBar';

class DecoratedPlayerBar extends YTNode {
  static type = 'DecoratedPlayerBar';

  player_bar: MultiMarkersPlayerBar | null;
  player_bar_action_button: Button | null;

  constructor(data: any) {
    super();
    this.player_bar = Parser.parseItem<MultiMarkersPlayerBar>(data.playerBar);
    this.player_bar_action_button = Parser.parseItem<Button>(data.playerBarActionButton);
  }
}

export default DecoratedPlayerBar;