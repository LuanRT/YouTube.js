import Parser from '../index';
import Text from './misc/Text';
import EndScreenVideo from './EndScreenVideo';
import EndScreenPlaylist from './EndScreenPlaylist';
import { YTNode } from '../helpers';

class WatchNextEndScreen extends YTNode {
  static type = 'WatchNextEndScreen';

  results;
  title: string;

  constructor(data: any) {
    super();
    this.results = Parser.parseArray<EndScreenVideo | EndScreenPlaylist>(data.results, [ EndScreenVideo, EndScreenPlaylist ]);
    this.title = new Text(data.title).toString();
  }
}

export default WatchNextEndScreen;