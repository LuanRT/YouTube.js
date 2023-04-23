import type { RawNode } from '../index.js';
import Playlist from './Playlist.js';

export default class CompactMix extends Playlist {
  static type = 'CompactMix';

  constructor(data: RawNode) {
    super(data);
  }
}