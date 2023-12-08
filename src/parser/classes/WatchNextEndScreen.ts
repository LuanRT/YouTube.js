import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import EndScreenPlaylist from './EndScreenPlaylist.js';
import EndScreenVideo from './EndScreenVideo.js';
import Text from './misc/Text.js';

export default class WatchNextEndScreen extends YTNode {
  static type = 'WatchNextEndScreen';

  results: ObservedArray<EndScreenVideo | EndScreenPlaylist>;
  title: string;

  constructor(data: RawNode) {
    super();
    this.results = Parser.parseArray(data.results, [ EndScreenVideo, EndScreenPlaylist ]);
    this.title = new Text(data.title).toString();
  }
}