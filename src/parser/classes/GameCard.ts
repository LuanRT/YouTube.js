import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class GameCard extends YTNode {
  static type = 'GameCard';

  game: YTNode;

  constructor(data: RawNode) {
    super();
    this.game = Parser.parseItem(data.game);
  }
}