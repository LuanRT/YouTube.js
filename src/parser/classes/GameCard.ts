import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class GameCard extends YTNode {
  static type = 'GameCard';

  game;

  constructor(data: any) {
    super();
    this.game = Parser.parseItem(data.game);
  }
}

export default GameCard;