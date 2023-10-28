import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import PlayerOverflow from './PlayerOverflow.js';

export default class PlayerControlsOverlay extends YTNode {
  static type = 'PlayerControlsOverlay';

  overflow: PlayerOverflow | null;

  constructor(data: RawNode) {
    super();
    this.overflow = Parser.parseItem(data.overflow, PlayerOverflow);
  }
}