import Parser from '../index';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class WatchNextEndScreen extends YTNode {
  static type = 'WatchNextEndScreen';

  results;
  title: string;

  constructor(data: any) {
    super();
    this.results = Parser.parse(data.results);
    this.title = new Text(data.title).toString();
  }
}

export default WatchNextEndScreen;