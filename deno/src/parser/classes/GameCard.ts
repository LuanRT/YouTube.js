import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';

export default class GameCard extends YTNode {
  static type = 'GameCard';

  game: YTNode;

  constructor(data: RawNode) {
    super();
    this.game = Parser.parseItem(data.game);
  }
}