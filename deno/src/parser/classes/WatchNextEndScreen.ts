import Parser from '../index.ts';
import Text from './misc/Text.ts';
import EndScreenVideo from './EndScreenVideo.ts';
import EndScreenPlaylist from './EndScreenPlaylist.ts';
import { YTNode } from '../helpers.ts';

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