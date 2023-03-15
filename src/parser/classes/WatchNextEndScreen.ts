import Parser from '../index.js';
import Text from './misc/Text.js';
import EndScreenVideo from './EndScreenVideo.js';
import EndScreenPlaylist from './EndScreenPlaylist.js';
import { YTNode } from '../helpers.js';

class WatchNextEndScreen extends YTNode {
  static type = 'WatchNextEndScreen';

  results;
  title: string;

  constructor(data: any) {
    super();
    this.results = Parser.parseArray(data.results, [ EndScreenVideo, EndScreenPlaylist ]);
    this.title = new Text(data.title).toString();
  }
}

export default WatchNextEndScreen;