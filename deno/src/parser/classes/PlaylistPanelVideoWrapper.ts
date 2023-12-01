import { Parser, type RawNode } from '../index.ts';
import { type ObservedArray, YTNode, observe } from '../helpers.ts';
import PlaylistPanelVideo from './PlaylistPanelVideo.ts';

export default class PlaylistPanelVideoWrapper extends YTNode {
  static type = 'PlaylistPanelVideoWrapper';

  primary: PlaylistPanelVideo | null;
  counterpart?: ObservedArray<PlaylistPanelVideo>;

  constructor(data: RawNode) {
    super();
    this.primary = Parser.parseItem(data.primaryRenderer, PlaylistPanelVideo);

    if (Reflect.has(data, 'counterpart')) {
      this.counterpart = observe(data.counterpart.map((item: RawNode) => Parser.parseItem(item.counterpartRenderer, PlaylistPanelVideo)) || []);
    }
  }
}