import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class GameCard extends YTNode {
  static type = 'GameCard';

  game;

  constructor(data: any) {
    super();
    this.game = Parser.parseItem(data.game);
  }
}

export default GameCard;