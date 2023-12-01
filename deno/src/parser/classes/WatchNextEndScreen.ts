import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import EndScreenPlaylist from './EndScreenPlaylist.ts';
import EndScreenVideo from './EndScreenVideo.ts';
import Text from './misc/Text.ts';

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