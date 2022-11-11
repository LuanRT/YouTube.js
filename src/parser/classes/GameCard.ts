import Parser from '..';
import { YTNode } from '../helpers';

export default class GameCard extends YTNode {
  static type = 'GameCard';

  game;

  constructor(data: any) {
    super();
    this.game = Parser.parseItem(data.game);
  }
}