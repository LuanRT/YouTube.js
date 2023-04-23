import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class PlaylistMetadata extends YTNode {
  static type = 'PlaylistMetadata';

  title: string;
  description: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.description = data.description || null;
    // XXX: Appindexing should be in microformat.
  }
}