import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class MusicAnalyticsArtistMetadata extends YTNode {
  static type = 'MusicAnalyticsArtistMetadata';

  kg_mid?: string;
  name?: string;

  constructor(data: RawNode) {
    super();
    this.kg_mid = data.kgMid;
    this.name = data.name;
  }
}
