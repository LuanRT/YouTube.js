import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import PlayerOverflow from './PlayerOverflow.ts';

export default class PlayerControlsOverlay extends YTNode {
  static type = 'PlayerControlsOverlay';

  overflow: PlayerOverflow | null;

  constructor(data: RawNode) {
    super();
    this.overflow = Parser.parseItem(data.overflow, PlayerOverflow);
  }
}