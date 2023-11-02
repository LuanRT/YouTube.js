import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class PlaylistSidebarSecondaryInfo extends YTNode {
  static type = 'PlaylistSidebarSecondaryInfo';

  owner: YTNode;
  button: YTNode;

  constructor(data: RawNode) {
    super();
    this.owner = Parser.parseItem(data.videoOwner);
    this.button = Parser.parseItem(data.button);
  }
}